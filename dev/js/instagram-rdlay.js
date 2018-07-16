var iRdlayModule = {
  horaAtual: function(hora) {
    if(!hora){
      var s = new Date();
    }else{
      var s = new Date();
          s.setHours(s.getHours() + hora);
    }
    return s;
  },

  setLocalStorage: function(props) {
    if (typeof(Storage) !== "undefined") {
        $.each(props, function(key, value){
          localStorage.setItem(key, JSON.stringify(value));
          console.log(key, value)
        })
    }else{
        console.log('localStorage sem suporte.');
    }
  },

  getLocalStorage: function(key) {
          var obj = localStorage.getItem(key);
          return JSON.parse(obj)
  },

  mountInstagram: function(e) {
    var o = "";
    for (a = 0; a < 8; a++) {
      o += '' +
        '<li>' +
          '<a href="'+e.data[a].link+'" target="_blank" title="'+e.data[a].caption.text+'">' +
          '<img src="'+e.data[a].images.standard_resolution.url+'" />' +
          '</a>' +
        '</li>';
    }
    $("#instagram").html(o);
  },
  checkHourCache: function(){
      var local = this.getLocalStorage('rdlayInstagramCache');
      if(!local){
          return false;
      }
      return true;
  }
};






// var horaAtual = function(hora){
//   if(!hora){
//     var s = new Date();
//   }else{
//     var s = new Date();
//         s.setHours(s.getHours() + hora);
//   }
//   return s;
// }

// colocar cache do instagram em localStorage
// var setLocalStorage = function(props){
//   if (typeof(Storage) !== "undefined") {
//       $.each(props, function(key, value){
//         localStorage.setItem(key, JSON.stringify(value));
//         console.log(key, value)
//       })
//   }else{
//       console.log('localStorage sem suporte.');
//   }
// }


// var getLocalStorage = function(key){
//         var obj = localStorage.getItem(key);
//         return JSON.parse(obj)
// }

//montar imagens do instagram
// var mountInstagram = function(e){
//   var o = "";
//   for (a = 0; a < 8; a++) {
//     o += '' +
//       '<li>' +
//         '<a href="'+e.data[a].link+'" target="_blank" title="'+e.data[a].caption.text+'">' +
//         '<img src="'+e.data[a].images.standard_resolution.url+'" />' +
//         '</a>' +
//       '</li>';
//   }
//
//   $("#instagram").html(o);
// }
// funÃ§Ã£o para verificar se o cache existe;
// var checkHourCache = function(){
//     var local = getLocalStorage('rdlayInstagramCache');
//     if(!local){
//         return false;
//     }
//     return true;
// }

var instaRdlay = (function(){

  var executou = false;
  var cache = iRdlayModule.checkHourCache();

  var config = { user: '344660244', token: '344660244.b6d98db.69a9705495134a16bdf4733805e309a0' };

  var url = "https://api.instagram.com/v1/users/" + config.user + "/media/recent/?access_token=" + config.token;

  return function(){
    console.log( (!executou && !cache) ? 'exec cache false' : 'exec cache true' );
    if(!executou && !cache){

      console.log('sem cache');

      $.ajax({
          url: url,
          type: "GET",
          dataType: "jsonp",
          cache: !1,
          success: function(e) {
              iRdlayModule.setLocalStorage({
                rdlayInstagramCache: {
                  time: iRdlayModule.horaAtual(12),
                  data: e
                }
              });
              iRdlayModule.mountInstagram(e);
              executou = true;
          },
          error: function(e) {
              console.error(e)
          }
      })

    }else{

        var local = iRdlayModule.getLocalStorage('rdlayInstagramCache');

        if(iRdlayModule.horaAtual().toISOString() > local.time){

          localStorage.removeItem('rdlayInstagramCache');
          executou = false;
          cache = iRdlayModule.checkHourCache();
          instaRdlay();

        }else{

          console.log('horaAtual < que ' + local.time);
          iRdlayModule.mountInstagram(local.data);
          executou = true;

        }
    }
  }
})();

$(function(){
  instaRdlay();
})
