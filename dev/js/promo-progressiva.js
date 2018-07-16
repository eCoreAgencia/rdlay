var text_pos = function(x, extra = false){
    var i = 'Você ganhou ' + x + ' peças promoção ';
    
        i += (extra) ? extra : '';
    return i;
  }
  
  var miniPromo = function(){
    var s = 0;
    $(".minicart__sku-count").each(function() {
    s = parseInt(s) + parseInt($(this).text())
    })
    var text_pre = 'Faltam ' + parseInt(20 - s) + ' peças para você ganhar 2 peças promoção';
  
  
    var exibe = "";
    if( s < 20 ){
      exibe = text_pre;
    }
    if(s >= 20 && s < 25){
      exibe = text_pos(2);
    }
    if(s >= 25 && s < 30){
      exibe = text_pos(3);
    }
    if(s >= 30 && s < 35){
      exibe = text_pos(4, 'e 1 bolsa');
    }
    if(s >= 35 && s < 40){
      exibe = text_pos(5);
    }
    if(s >= 40 && s < 45){
      exibe = text_pos(6);
    }
    if(s >= 45 && s < 50){
      exibe = text_pos(7);
    }
    if(s >= 50 && s < 55){
      exibe = text_pos(8);
    }
    if(s >= 55 && s < 60){
      exibe = text_pos(9);
    }
    if(s >= 60){
      exibe = text_pos(10, ' e 2 bolsas');
    }
  
    console.log(s, exibe);
  
      $('.miniPromo').remove();
      $(".minicart__discount-text").after('<div style="font-size: 13px;font-size: 1.3rem;text-align:left;font-weight:bold;" class="miniPromo">'+exibe+'</div>');
  }
  
  var miniPromoWithAjaxStop = function(){
    $(document).ajaxStop(function(){
      miniPromo();
    });
  }
  
  $(document).on('click','.minicart__qty-button', function() {
    miniPromoWithAjaxStop();
  })
  
  $(document).on('click','.js-cart-items-count', function() {
    miniPromo();
  })
  