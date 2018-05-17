// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.

/*
var sla1 = function(){
  $(".shipping-option-item-text-wrapper").each(function(){
    var f = $(this).find('.shipping-option-item-name').text().search('Retirar');
      if( f >= 0 ){
        var s = $(this).parent().find('.delivery-estimate').text().replace('Até','Após');
        $(this).parent().find('.delivery-estimate').text(s);
      }
    })
}

sla1();

$( document ).on( 'click', '.shipping-option-item',function(){
  setTimeout(function(){
    sla1();
  },100);
});

*/// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.

/*
var sla1 = function(){
  $(".shipping-option-item-text-wrapper").each(function(){
    var f = $(this).find('.shipping-option-item-name').text().search('Retirar');
      if( f >= 0 ){
        var s = $(this).parent().find('.delivery-estimate').text().replace('Até','Após');
        $(this).parent().find('.delivery-estimate').text(s);
      }
    })
}

sla1();

$( document ).on( 'click', '.shipping-option-item',function(){
  setTimeout(function(){
    sla1();
  },100);
});

*/

$(document).ready(function(){

  var setLocalStorage = function(props){
    if (typeof(Storage) !== "undefined") {
        $.each(props, function(key, value){
          sessionStorage.setItem(key, JSON.stringify(value));
          console.log(key, value)
        })
    }else{
        console.log('sessionStorage sem suporte.');
    }
  }

  //obter informações do cache
  var getLocalStorage = function(key){
          var obj = sessionStorage.getItem(key);
          return JSON.parse(obj)
  }


  var markPayment = setInterval(function(){
   console.log(window.location.toString().includes('payment'))
    if(window.location.toString().includes('payment')){
      setTimeout(function(){
        document.getElementById('change-other-shipping-option').click();
        console.log('CLICOU');
      },1500)
      clearInterval(markPayment);
    }
  },1000);


  //mark PAC /cart

  var cartPacMark = setInterval(function(){

    if(window.location.toString().includes("cart") > -1 && $("#PAC").length ){
        var existeMarkPac = getLocalStorage('rd_markpac');
        if(!existeMarkPac){
          console.log('não existe markPac');
      	  $("#PAC").click();

          setLocalStorage( { rd_markpac: {check:true} } );

        }else{
          console.log('existe markPac');
        }
        clearInterval(cartPacMark);
        setTimeout(function(){
            removeLi();
            $(".rdlayR").remove();
            $(".shipping-sla-options").prepend('<li class="rdlayR" style="font-size:13px;">Retirar pedido em uma loja R.D.Lay - 4 dias úteis.</li>');
        },2200);
    }

  },1300);

  var removeLi = function(){

    $("span").each(function(){
      if($(this).text().search('Retirar') >= 0){
        $(this).parent().hide();
      }
      if($(this).text().search('PAC') >= 0){
        $(".shipping-sla-options").prepend('<li class="rdlayR" style="font-size:13px;">Retirar pedido em uma loja R.D.Lay - 4 dias úteis.</li>');

      }
    })

    $(".rdlayR").first().remove();
  }
  $(document).on('click', '#cart-shipping-calculate', function(){
    setTimeout(function(){
      removeLi();
    },3000);
  })

  /**
   * [função para gerar hash]
   * @return {string} [exemplo 'nomex'.hash() retorna algo como 4565746543 ]
   */
    String.prototype.hash = function() {
        var self = this,
            range = Array(this.length);
        for (var i = 0; i < this.length; i++) {
            range[i] = i
        }
        return Array.prototype.map.call(range, function(i) {
            return self.charCodeAt(i).toString(16)
        }).join('')
    }
    /**
     * [nome_lojas nome das lojas cadastradas no sistema]
     * @type {Array}
     */
    var nome_lojas = [{
        nome: 'Taquara',
        img: 'https://rdlay.vteximg.com.br/arquivos/maps-loja-taquara.png',
        logradouro: 'Rua Apiacás, 334 Loja B (Ao lado da Unissuam)',
        horario: 'Seg à Sex, 09:00 as 19:00 - Sáb, 09:00 as 14:00',
        telefone: '(21) 3764-7330'
    }, {
        nome: 'Nova Iguaçu',
        nome_real: 'Nova Iguaçu',
        'img': 'https://rdlay.vteximg.com.br/arquivos/maps-loja-nova-iguacu.png',
        logradouro: 'Av. Abílio Augusto Távora, 2083 - Redenção - Nova Iguaçu (em frente à faculdade UNIG)',
        horario: 'Seg à Sex, 09:00 as 19:00 - Sáb, 09:00 as 14:00',
        telefone: '(21) 3764-7330'
    }, {
        nome: 'Fábrica (Loja Virtual)',
        nome_real: 'Fábrica - Loja Virtual',
        'img': 'https://rdlay.vteximg.com.br/arquivos/maps-loja-nova-iguacu-bairro-da-luz.png',
        logradouro: 'Rua Humberto de Campos 908 - Nova Iguaçu (Bairro da Luz)',
        horario: 'Seg à Sex, 09:00 as 16:00',
        telefone: '(21) 3764-7330'
    }, {
        nome: 'São Gonçalo',
        nome_real: 'São Gonçalo',
        logradouro: 'Rua Feliciano Sodré, 167 lj 02 (em frente ao banco Itaú)',
        img: 'https://rdlay.vteximg.com.br/arquivos/maps-loja-sao-goncalo.png',
        horario: 'Seg à Sex, 09:00 as 19:00 - Sáb, 09:00 as 14:00',
        telefone: '(21) 3764-7330'
    }, {
        nome: 'Centro',
        logradouro: 'R. Sr. dos Passos, 246',
        img: 'https://rdlay.vteximg.com.br/arquivos/maps-loja-centro.png',
        horario: 'Seg à Sex, 09:00 as 19:00 - Sáb, 09:00 as 14:00',
        telefone: '(21) 3764-7330'
    }, {
        nome: 'Duque de Caxias',
        logradouro: 'Avenida Brigadeiro Lima e Silva 1988 (em frente ao Banco Itaú) 25 de Agosto',
        img: 'https://rdlay.vteximg.com.br/arquivos/maps-loja-duque-de-caxias.png',
        horario: 'Seg à Sex, 09:00 as 19:00 - Sáb, 09:00 as 14:00',
        telefone: '(21) 3764-7330'
    }, {
        nome: 'Nilópolis',
        logradouro: 'Estrada Pedro Álvares Cabral, 58',
        img: 'https://rdlay.vteximg.com.br/arquivos/maps-loja-nilopolis.png',
        horario: 'Seg à Sex, 09:00 as 19:00 - Sáb, 09:00 as 14:00',
        telefone: '(21) 3764-7330'
    }, {
        nome: 'Campo Grande',
        logradouro: 'Rua Coronel Agostinho, 5 - Calçadão em frente ao túnel',
        img: 'https://rdlay.vteximg.com.br/arquivos/maps-loja-campo-grande.png',
        horario: 'Seg à Sex, 09:00 as 19:00 - Sáb, 09:00 as 14:00',
        telefone: '(21) 3764-7330'
    }, {
        nome: 'Madureira',
        logradouro: 'Estr. do Portela, 99 - Loja 168',
        img: 'https://rdlay.vteximg.com.br/arquivos/maps-loja-madureira.png',
        horario: 'Seg à Sex, 09:00 as 19:00 - Sáb, 09:00 as 14:00',
        telefone: '(21) 3764-7330'
    }];
    $(".close").on('click', function() {
        $(".storePickup").hide()
    });
    /**
     * [realiza buscas no label com a expressão definida ]
     * @param  {[string]} exp [string a ser buscada]
     * @return {[array]}     [array]
     */
    var expressao = function(exp) {
        var items = [];
        $(".shipping-option-item").each(function() {
            var f = $(this).find('input').val().search(exp);
            if (f >= 0) {
                var s = $(this).find('input').val().split(exp);
                var t = s[1].split("-");
                var a = t[0];
                items.push({
                    loja: a.trim(),
                    id: $(this).attr('for').trim()
                })
            }
        })
        return items
    }
    /**
     * [ordena o array de lojas por nome ]
     * @param  {[array]} props [ recebe um array]
     * @return {[array]}       [ array ordenado ]
     */
    var ordenaPorNome = function(props) {
        return props.sort(function(a, b) {
            return a.loja.localeCompare(b.loja)
        })
    }
    var lojasComMaps = [];
    var addLojas = function() {
        var exp1 = expressao('loja da');
        var exp2 = exp1.concat(expressao('loja de'));
        var lojas_com_id = exp2;
        lojas_com_id.map(function(i, k) {
            nome_lojas.map(function(f, j) {
                if (i.loja.hash() == f.nome.hash()) {
                    lojasComMaps.push({
                        loja: i.loja,
                        id: i.id,
                        img: f.img,
                        logradouro: f.logradouro,
                        horario: f.horario,
                        telefone: f.telefone
                    })
                }
            })
        })
        getLojasToSelect({
            arr: ordenaPorNome(lojasComMaps)
        })
    }
    var getLojasToSelect = function(props) {
        var lojas = "";
        props.arr.map(function(i, k) {
            lojas += mountSelectItems({
                id: i.id,
                nome: i.nome_real || i.loja,
                logradouro: i.logradouro,
                horario: i.horario,
                telefone: i.telefone,
                img: i.img
            })
        })
        $(".selector .options").html(lojas)
    }
    //cria divs com os itens do select
    var mountSelectItems = function(props) {
        return '<div class="option" data-id="' + props.id + '" data-logradouro="' + props.logradouro + '" data-horario="' + props.horario + '" data-telefone="' + props.telefone + '" data-img="' + props.img + '">' + props.nome + '</div>'
    }
    var mountItemsModal = function(props) {
        var end = '<strong>End: ' + props.logradouro + '</strong><br>';
        end += '<strong>Telefone:</strong> ' + props.telefone + '<br>';
        end += '<strong>Horário:</strong> ' + props.horario;
        $(".store .name").text(props.nome_loja);
        $(".logradouro").html(end);
        $(".SPMap-canvas img").attr('src', props.imagem);
        $(".confirmStore").data('id', props.idConfirmStore);
        $(".confirmStore").data('loja', props.nome_loja);
    }
    $(document).on('click', '.option', function() {
        $('.selector .options .option').removeClass('active');
        $(this).addClass('active');
        mountItemsModal({
            nome_loja: $(this).text(),
            logradouro: $(this).data('logradouro'),
            telefone: $(this).data('telefone'),
            horario: $(this).data('horario'),
            imagem: $(this).data('img'),
            idConfirmStore: $(this).data('id')
        })
    })
    var labelCheck = function(id) {
        $("label").each(function() {
            if ($(this).attr('for') == id) {
                $(this).click()
            }
        })
    }
    //confirmação de escolha do local
    $(document).on('click', '.confirmStore', function() {
        labelCheck($(this).data('id'));
        labelRetirarAddClassCheck($(this).data('loja'));
        $(".storePickup").hide();
        instrucoesShow();
    })
    var hideLabels = function() {
        $(".shipping-option-item").each(function() {
            var f = $(this).find('input').val().search('Retirar');
            if (f >= 0) {
                $(this).hide()
            }
        });
        $(".sla-items-list .span").prepend("<label class='shipping-option-item label-vertical-group input btn open-modal'><input type='radio' id='seller-1-sla-RetirarPedido' name='seller-1' value='Escolha' data-shipping-option='0'><span class='shipping-option-item-text-wrapper'><span class='shipping-option-item-name lojaRetiradaEscolhida'>Escolha uma loja R.D.Lay para retirada</span></span><i class='icon-circle-blank' id='labelRetirar'></i></label>")
    }
    var markPAC = function() {
        $("label[for='seller-1-sla-PAC']").click()
    }
    var lojaEscolhida = "";
    var labelRetirarAddClassCheck = function(loja) {
        setTimeout(function() {

            $("#labelRetirar").removeClass('icon-circle-blank').addClass('icon-ok-circle');
            if(loja){
              var a = "Loja para retirada: " + loja;
              $(".lojaRetiradaEscolhida").text(a);
              lojaEscolhida = loja;
            }
            if(lojaEscolhida){
                $(".lojaRetiradaEscolhida").text("Loja para retirada: " + lojaEscolhida);
            }
        }, 300);
    }
    var isUrl = function() {
        var r = window.location.toString().includes("/shipping");
        console.log(r);
        return r
    }
/*
    var inter = setInterval(function() {
        if (isUrl()) {
            clearInterval(inter);
            addLojas();
            hideLabels();
            console.log('terminou')
        }
    }, 1000);
*/
  var instrucoesShow = function(){
    setTimeout(function(){
      $("fieldset.shipping-options").before('<div class="inst"><strong>Instruções para retiradas:</strong><br />- Somente o titular da compra pode realizar.<br />- Apresentar uma cópia de um documento oficial com foto: RG ou CNH.<br />- Prazo conta a partir da aprovação do pedido.<br /></div>');
      if($(".inst").length > 1){
        $(".inst").last().remove();
      }
    },300)
  }

  var timeShow = function(){

        setTimeout(function(){
          //addLojas();
          hideLabels();
          console.log('terminou');
          instrucoesShow();
        },2000)


        setTimeout(function(){
            var iks = setInterval(function(){
                  if($("label[for='seller-1-sla-PAC']").length){

                    $("label[for='seller-1-sla-PAC']").click()

                    clearInterval(iks);

                    if($(".open-modal").length > 1){
                      $(".open-modal").last().remove();
                    }

                    instrucoesShow();
                  }

            },1000)
        },1200)
  }


  var timeIs = false;

  if(window.location.toString().includes("shipping") > -1) {
      setTimeout(function(){
        timeShow()
        console.log('existe : ', window.location.toString().includes("shipping"));
      },1500)

      timeIs = true;

  }

    window.onhashchange = function() {
      if (isUrl()) {
        if(!timeIs){
          setTimeout(function(){
            timeShow();
          }, 1500);
        }
      }
    }

    var addLojasToModal = (function(){
      var executou = false;
      return function(){
        if(!executou){
          addLojas();
          executou = true;
        }
      }
    })();

    $(document).on('click', '.open-modal', function() {
        addLojasToModal();
        $(".storePickup").show();
        labelRetirarAddClassCheck()
    });

    $(document).on('click', '.shipping-option-item', function() {
        setTimeout(function() {
            hideLabels()
        }, 150)
    });

})
