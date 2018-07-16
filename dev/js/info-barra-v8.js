var barraLateralBeneficios = {
  isBotchatOn: false,
  timerHoverContentFade: 0,
  timeoutToHoverElements: 0,
  timerCountToOpenBotchat: 100000, //1min
  timeoutToOpenBotchat: 0,
  removeBarraDOM: false,
  addBarraAhlmaDOM: false,
  isBarraOpen: false,
  isNeoChatOpen: false,
  isBotchatOpen: true,
  arrowPosition: 0,
  barraLateralElement: '',
  hoverDesconto: '<div class="icon -desconto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.16 428.16" width="512" height="512"><path d="M393.8 110.208c-.512-11.264-.512-22.016-.512-32.768 0-8.704-6.656-15.36-15.36-15.36-64 0-112.64-18.432-153.088-57.856-6.144-5.632-15.36-5.632-21.504 0C162.888 43.648 114.248 62.08 50.248 62.08c-8.704 0-15.36 6.656-15.36 15.36 0 10.752 0 21.504-.512 32.768-2.048 107.52-5.12 254.976 174.592 316.928l5.12 1.024 5.12-1.024c179.2-61.952 176.64-208.896 174.592-316.928zM201.8 259.2c-3.072 2.56-6.656 4.096-10.752 4.096h-.512c-4.096 0-8.192-2.048-10.752-5.12l-47.616-52.736 23.04-20.48 37.376 41.472 82.944-78.848 20.992 22.528L201.8 259.2z" fill="#333"/></svg></div>\
    <div class="text -desconto" style="width:215px">\
    <strong>Aqui você pode CONFIAR!</strong>\
    Contamos com selos de segurança para proteger os dados de nossos clientes!\
    </div>',

  hoverTrocaGratis: '<div class="icon -troca"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.422 512.422" width="512" height="512"><g fill="#333"><path d="M41.053 223.464c2.667 1.067 5.76 1.067 8.427-.213l83.307-37.867c5.333-2.56 7.573-8.96 5.013-14.293-2.453-5.12-8.533-7.467-13.76-5.12l-58.347 26.56C93.533 109.224 171.08 53.544 260.36 53.544c93.547 0 175.36 62.507 198.933 152 1.493 5.653 7.36 9.067 13.013 7.573 5.653-1.493 9.067-7.36 7.573-13.013-26.027-98.773-116.267-167.893-219.52-167.893-98.453 0-184.107 61.44-215.04 153.387l-24.533-61.333c-1.813-5.547-7.893-8.64-13.44-6.827-5.547 1.813-8.64 7.893-6.827 13.44.107.427.32.853.533 1.28l34.027 85.333c1.067 2.667 3.2 4.907 5.974 5.973zM511.773 380.904c-.107-.213-.213-.427-.213-.64l-34.027-85.333c-1.067-2.667-3.2-4.907-5.973-5.973-2.667-1.067-5.76-.96-8.427.213l-83.307 37.867c-5.44 2.24-8 8.533-5.76 13.973 2.24 5.44 8.533 8 13.973 5.76l.64-.32 58.347-26.56c-28.053 83.307-105.707 138.987-194.88 138.987-93.547 0-175.36-62.507-198.933-152-1.493-5.653-7.36-9.067-13.013-7.573-5.653 1.493-9.067 7.36-7.573 13.013 25.92 98.88 116.267 167.893 219.52 167.893 98.453 0 184-61.44 215.04-153.387l24.533 61.333c2.027 5.547 8.107 8.427 13.653 6.4 5.546-2.026 8.426-8.106 6.4-13.653z"/></g></svg></div>\
    <div class="text -troca">\
    <strong>Troca fácil</strong>\
    Pode solicitar a sua troca na loja virtual ou na loja física (mediante aviso prévio).<br /><br />\
    Prazo de 30 dias.<br />\
    Trocamos 50% do valor da NF\
    </div>',

  hoverFreteGratis: '<div class="icon -frete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><path d="M119.467 337.067c-28.237 0-51.2 22.963-51.2 51.2 0 28.237 22.963 51.2 51.2 51.2s51.2-22.963 51.2-51.2c0-28.237-22.964-51.2-51.2-51.2zm0 85.333c-18.825 0-34.133-15.309-34.133-34.133 0-18.825 15.309-34.133 34.133-34.133s34.133 15.309 34.133 34.133c0 18.824-15.309 34.133-34.133 34.133zM409.6 337.067c-28.237 0-51.2 22.963-51.2 51.2 0 28.237 22.963 51.2 51.2 51.2 28.237 0 51.2-22.963 51.2-51.2 0-28.237-22.963-51.2-51.2-51.2zm0 85.333c-18.825 0-34.133-15.309-34.133-34.133 0-18.825 15.309-34.133 34.133-34.133 18.825 0 34.133 15.309 34.133 34.133 0 18.824-15.308 34.133-34.133 34.133z" fill="#333"/><path d="M510.643 289.784l-76.8-119.467a8.535 8.535 0 0 0-7.177-3.917H332.8a8.53 8.53 0 0 0-8.533 8.533v213.333a8.525 8.525 0 0 0 8.533 8.533h34.133v-17.067h-25.6V183.467h80.674l72.926 113.442v82.825h-42.667V396.8h51.2a8.525 8.525 0 0 0 8.533-8.533V294.4a8.51 8.51 0 0 0-1.356-4.616z" fill="#333"/><path d="M375.467 277.333V217.6h68.267v-17.067h-76.8a8.53 8.53 0 0 0-8.533 8.533v76.8a8.525 8.525 0 0 0 8.533 8.533h128v-17.067H375.467zM332.8 106.667H8.533A8.536 8.536 0 0 0 0 115.2v273.067a8.53 8.53 0 0 0 8.533 8.533H76.8v-17.067H17.067v-256h307.2v256H162.133V396.8H332.8a8.525 8.525 0 0 0 8.533-8.533V115.2a8.53 8.53 0 0 0-8.533-8.533z" fill="#333"/><path fill="#333" d="M8.533 345.6h51.2v17.067h-51.2zM179.2 345.6h145.067v17.067H179.2zM469.333 345.6h34.133v17.067h-34.133zM34.133 140.8H332.8v17.067H34.133zM110.933 379.733H128V396.8h-17.067zM401.067 379.733h17.067V396.8h-17.067zM34.133 72.533H153.6V89.6H34.133zM0 72.533h17.067V89.6H0z"/></svg></div>\
    <div class="text -frete">\
    <strong>Frete Grátis</strong>\
    Varejo acima de R$ 199,99<br/>\
    Atacado acima de 999,99<br/>\
    Retirada na loja ;)\
    </div>',

  hoverPresente: '<div class="icon -presente"></div>\
    <div class="text -presente">\
      Os itens Reserva e Mini chegam embrulhados para presente com nota fiscal sem valores. Escolha a opção na sacola de compras.\
    </div>',
    //onclick="sendPostMessage(&#39;ActiveModule:AI&#39;);"
  hoverAjuda: '<div class="icon -ajuda"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.813 25.813" width="512" height="512"><path d="M13.953 14a2 2 0 1 1 3.999-.001 2 2 0 0 1-3.999.001zm-6-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 7.953 12zm14-2h-.161c.004-6.996-4.665-10-9.839-10C6.372 0 1.212 3.464 2.167 11.715 1.422 12.4.953 13.522.953 14.84c0 1.872 1.793 3.478 3.182 3.987.45 1.485 1.357 2.829 2.65 3.916a1 1 0 0 0 1.287-1.531c-1.144-.961-1.864-2.112-2.141-3.423-.091-.431-.53-.755-.969-.793-.449-.039-2.009-1.134-2.009-2.156 0-.479.101-.883.251-1.194a.989.989 0 0 0 .749.354 1 1 0 0 0 1-1v-.961c.037-.634.127-1.291.286-1.937 1.372-.465 2.525.29 3.714-3.212 1.743 5.181 6.253 2.194 9.351 2.052.358.88.581 1.907.649 3.098V13a1 1 0 0 0 1 1v2.485c-.371.308-.758.515-1 .515a1 1 0 0 0-.979.793 5.776 5.776 0 0 1-1.193 2.463.998.998 0 0 0 .145 1.406.996.996 0 0 0 1.406-.145 7.828 7.828 0 0 0 1.43-2.652c.51-.162 1.027-.472 1.497-.865h.687c-.548 2.776-2.095 4.081-2.394 4.304-.265.113-1.758.677-4.829.845-.207-1.11-1.363-1.962-2.77-1.962-1.554 0-2.813 1.036-2.813 2.313s1.259 2.313 2.813 2.313c.982 0 1.843-.415 2.347-1.041 4.156-.16 5.939-1.021 6.097-1.106.125-.083 2.766-1.909 3.267-6.233A3.012 3.012 0 0 0 24.859 15v-2c0-1.657-1.25-3-2.906-3z" fill="#333"/></svg></div>\
      <div class="item">\
      <strong>Fale conosco</strong>\
      <div class="text -ajuda">\
        Canal exclusivo para você tirar suas dúvidas referentes a loja fisica. \
        Telefone do nosso SAC: <span class="red">21 3764-7330</span>\
      </div>\
      <a href="javascript:void(0)" id="callToNeoassisChat" class="help ai-button button" onclick="sendPostMessage(&#39;ActiveModule:AI&#39;);">Chat</a>\
    </div>\
    <div class="item">\
      <div class="title -bold">Encontre o produto certo</div>\
      <div class="text -ajuda">\
        Nosso Chat te ajudar a achar produtos perfeitos para você, confira as recomendações!\
      </div>\
      <a id="callToBotChat" class="button">Receber Recomendações</a>\
    </div>',

  hoverAjudaAhlma: '<div class="icon -ajuda"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.813 25.813" width="512" height="512"><path d="M13.953 14a2 2 0 1 1 3.999-.001 2 2 0 0 1-3.999.001zm-6-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 7.953 12zm14-2h-.161c.004-6.996-4.665-10-9.839-10C6.372 0 1.212 3.464 2.167 11.715 1.422 12.4.953 13.522.953 14.84c0 1.872 1.793 3.478 3.182 3.987.45 1.485 1.357 2.829 2.65 3.916a1 1 0 0 0 1.287-1.531c-1.144-.961-1.864-2.112-2.141-3.423-.091-.431-.53-.755-.969-.793-.449-.039-2.009-1.134-2.009-2.156 0-.479.101-.883.251-1.194a.989.989 0 0 0 .749.354 1 1 0 0 0 1-1v-.961c.037-.634.127-1.291.286-1.937 1.372-.465 2.525.29 3.714-3.212 1.743 5.181 6.253 2.194 9.351 2.052.358.88.581 1.907.649 3.098V13a1 1 0 0 0 1 1v2.485c-.371.308-.758.515-1 .515a1 1 0 0 0-.979.793 5.776 5.776 0 0 1-1.193 2.463.998.998 0 0 0 .145 1.406.996.996 0 0 0 1.406-.145 7.828 7.828 0 0 0 1.43-2.652c.51-.162 1.027-.472 1.497-.865h.687c-.548 2.776-2.095 4.081-2.394 4.304-.265.113-1.758.677-4.829.845-.207-1.11-1.363-1.962-2.77-1.962-1.554 0-2.813 1.036-2.813 2.313s1.259 2.313 2.813 2.313c.982 0 1.843-.415 2.347-1.041 4.156-.16 5.939-1.021 6.097-1.106.125-.083 2.766-1.909 3.267-6.233A3.012 3.012 0 0 0 24.859 15v-2c0-1.657-1.25-3-2.906-3z" fill="#333"/></svg></div>\
      <div class="item">\
      <strong>Fale conosco</strong>\
      <div class="text -ajuda">\
        Canal exclusivo para você tirar suas dúvidas referentes a loja fisica.<br/>\
        Telefone do nosso SAC: <span class="red">21 3764-7330</span>\
      </div>\
      <a href="http://goo.gl/6jU2b5" target="_blank" class="help ai-button button">Chat</a>\
    </div>',

  hoverTelevendas: '<div class="icon -televendas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.842 333.842" width="512" height="512"><path d="M166.911 333.832C74.879 333.832 0 258.96 0 166.921S74.873.01 166.911.01c92.045 0 166.931 74.879 166.931 166.918s-74.886 166.904-166.931 166.904zm0-320.969c-84.95 0-154.058 69.108-154.058 154.064 0 84.943 69.108 154.058 154.058 154.058 84.956 0 154.077-69.114 154.077-154.058-.006-84.956-69.12-154.064-154.077-154.064zm-12.885 93.318c0-15.971-12.989-28.966-28.966-28.966S96.094 90.21 96.094 106.181c0 5.328 4.319 9.64 9.64 9.64 5.321 0 9.64-4.312 9.64-9.64 0-5.341 4.345-9.685 9.685-9.685 5.341 0 9.685 4.345 9.685 9.685 0 5.328 4.319 9.64 9.64 9.64s9.642-4.312 9.642-9.64zm83.715 0c0-15.971-12.989-28.966-28.966-28.966S179.81 90.21 179.81 106.181c0 5.328 4.319 9.64 9.64 9.64 5.321 0 9.64-4.312 9.64-9.64 0-5.341 4.345-9.685 9.685-9.685s9.685 4.345 9.685 9.685c0 5.328 4.319 9.64 9.64 9.64s9.641-4.312 9.641-9.64zm-70.823 157.727c56.563 0 102.431-45.855 102.431-102.424H64.487c0 56.569 45.855 102.424 102.431 102.424z" fill="#333"/></svg></div>\
    <div class="text -televendas">\
      <strong>Loja virtual R.D.Lay</strong>\
      <a class="link-whats" href="https://api.whatsapp.com/send?phone=21972792002">(21)97279-2002</a><br/>\
      Estamos sempre dispostos a ajudar!\<br/>\
      Horário de Seg. a Sex. 9h às 17h<br/><br/>\
      Aguardamos sua mensagem. ;)\
    </div>',

  initGeneral: function() {

    barraLateralBeneficios.barraLateralElement = '<div class="barra-lateral-beneficios">\
      <div class="barra-header">\
        <button>\
          <svg version="1.1" id="_x3C_Layer_x3E_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 12.5 22 L 10 19.5 L 15.5 14 L 10 8.5 L 12.5 6 L 20.5 14 L 12.5 22Z"></path></svg>\
        </button>\
      </div>\
      <div class="itens">\
        <a class="item -desconto clearfix" data-hover="desconto">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Desconto</span> na 1ª compra</div>\
        </a>\
        <a class="item -troca clearfix" data-hover="troca">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Troca</span> grátis</div>\
        </a>\
        <a class="item -frete clearfix" data-hover="frete">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Frete</span> grátis  </div>\
        </a>\
        <a class="item -presente clearfix" data-hover="presente">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Embalado</span> para presente</div>\
        </a>\
      </div>\
      <div class="itens -bottom">\
        <a class="item -ajuda clearfix" data-hover="ajuda">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Posso ajudar?</span></div>\
        </a>\
        <a class="item -televendas clearfix" data-hover="televendas">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Televendas:</span> 21 3003-1255</div>\
        </a>\
      </div>\
      <div class="force-out"></div>\
    </div>\
    <div class="barra-lateral-beneficios-hover">\
      <div class="js-barra-hover-a-target-element clearfix">\
        <div class="arrow"></div>\
        <div class="contents"></div>\
      </div>\
    </div>';
  },
  initAhlma: function () {

    barraLateralBeneficios.barraLateralElement = '<div class="barra-lateral-beneficios">\
      <div class="barra-header">\
        <button>\
          <svg version="1.1" id="_x3C_Layer_x3E_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 12.5 22 L 10 19.5 L 15.5 14 L 10 8.5 L 12.5 6 L 20.5 14 L 12.5 22Z"></path></svg>\
        </button>\
      </div>\
      <div class="itens">\
        <a class="item -desconto clearfix" data-hover="desconto">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Desconto</span> na 1ª compra</div>\
        </a>\
        <a class="item -troca clearfix" data-hover="troca">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Troca</span> grátis</div>\
        </a>\
        <a class="item -frete clearfix" data-hover="frete">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Frete</span> grátis  </div>\
        </a>\
        <a class="item -presente clearfix" data-hover="presente">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Embalado</span> para presente</div>\
        </a>\
      </div>\
      <div class="itens -bottom">\
        <a class="item -ajuda clearfix" data-hover="ajudaAhlma">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Posso ajudar?</span></div>\
        </a>\
        <a class="item -televendas clearfix" data-hover="televendas">\
          <div class="icon"></div>\
          <div class="title"><span class="-bold">Televendas:</span> 21 3003-1255</div>\
        </a>\
      </div>\
      <div class="force-out"></div>\
    </div>\
    <div class="barra-lateral-beneficios-hover">\
      <div class="js-barra-hover-a-target-element clearfix">\
        <div class="arrow"></div>\
        <div class="contents"></div>\
      </div>\
    </div>';
  },
  eventsBarra: function () {

    //barra-lateral-beneficios
    if (!barraLateralBeneficios.isBarraOpen) {
      $('.barra-lateral-beneficios').on('click', function () {
        if (barraLateralBeneficios.isBarraOpen) {
          $('.barra-lateral-beneficios').removeClass('-open');
          $('.barra-lateral-beneficios-hover').removeClass('-open');
          barraLateralBeneficios.isBarraOpen = false;
        } else {
          $('.barra-lateral-beneficios').addClass('-open');
          barraLateralBeneficios.isBarraOpen = true;
        }
      });
    }

    $('.barra-lateral-beneficios .itens .item').on("mouseenter", function() {

      var _hoverTargetValue = $(this).attr('data-hover');

      if ($('.barra-lateral-beneficios').hasClass('-open')) {

        if(_hoverTargetValue != undefined) {
          $('.barra-lateral-beneficios-hover').addClass('-open');
          barraLateralBeneficios.mountHoverContents(_hoverTargetValue);

          $(this).find('.title').addClass('-hovered');

        }else {
          barraLateralBeneficios.unmountHoverContents();
          $(this).find('.title').removeClass('-hovered');
        }
      }
    });

    $('.barra-lateral-beneficios .itens .item').on("mouseleave", function() {
      $(this).find('.title').removeClass('-hovered');
      clearTimeout(barraLateralBeneficios.timeoutToHoverElements);
    });

    $('.barra-lateral-beneficios .barra-header').on("mouseenter", function () {
      barraLateralBeneficios.unmountHoverContents();
    });

    $('.barra-lateral-beneficios-hover').on("mouseleave", function () {
      barraLateralBeneficios.unmountHoverContents();
    });

    $('.force-out').on("mouseenter", function () {
      barraLateralBeneficios.unmountHoverContents();
    });

    $('body').on('click', '#callToBotChat', function(e) {
      e.preventDefault();
      e.stopPropagation();
      //fecha a barra
      barraLateralBeneficios.closeBarra();

      //abre o chat
      barraLateralBeneficios.openBotchat();
      barraLateralBeneficios.callNeoassist();
    });

    $('body').on('click', 'a#callToNeoassisChat', function() {
      //fecha a barra
      barraLateralBeneficios.closeBarra();
      barraLateralBeneficios.isNeoChatOpen = true;
      var _timeout = setTimeout(function() {
        $('body #elCentralClient').css('width', '435px');
        $('body #elCentralClient').css('right', '62px');
        $('body #elCentralClient').css('bottom', '48px');
        $('body #elCentralClient').css('z-index', '9');
      }, 100);
    });
  },
  closeBarra: function() {
    barraLateralBeneficios.unmountHoverContents();
    $('.barra-lateral-beneficios').removeClass('-open');
    barraLateralBeneficios.isBarraOpen = false;
  },
  openBotchat: function() {
    $('#reactBotchat').addClass('active');
    barraLateralBeneficios.isBotchatOpen = true;
  },
  mountHoverContents: function (target) {
    var content = '';

    switch (target) {
      case 'desconto':
        content = barraLateralBeneficios.hoverDesconto;
        barraLateralBeneficios.arrowPosition = 58;
        break;

      case 'troca':
        content = barraLateralBeneficios.hoverTrocaGratis;
        barraLateralBeneficios.arrowPosition = 94;
        break;

      case 'frete':
        content = barraLateralBeneficios.hoverFreteGratis;
        barraLateralBeneficios.arrowPosition = 128;
        break;

      case 'presente':
        content = barraLateralBeneficios.hoverPresente;
        barraLateralBeneficios.arrowPosition = 160;
        break;

      case 'ajuda':
        if (barraLateralBeneficios.isBotchatOn) {
          content = barraLateralBeneficios.hoverAjuda;
        }else {
          content = barraLateralBeneficios.hoverAjudaAhlma;
        }

        barraLateralBeneficios.arrowPosition = 205;
        break;

      case 'ajudaAhlma':
        content = barraLateralBeneficios.hoverAjudaAhlma;
        barraLateralBeneficios.arrowPosition = 205;
        break;

      case 'televendas':
        content = barraLateralBeneficios.hoverTelevendas;
        barraLateralBeneficios.arrowPosition = 240;
        break;

      default:
        break;
    }

    clearTimeout(barraLateralBeneficios.timeoutToHoverElements);
    barraLateralBeneficios.timeoutToHoverElements = setTimeout(function(){
      //se o item mudar, verificar quanto tempo a pessoa esta em cima dele e mostrar
      //Anima a seta do HOVER
      $(".arrow").stop();
      $(".arrow").clearQueue();
      $(".arrow").animate({top: barraLateralBeneficios.arrowPosition}, 100);


      //Mostra o HOVER (esconde, limpa o conteudo e mostra novamente com o conteudo atualizado)
      $('.js-barra-hover-a-target-element .contents').fadeOut(100, function() {
        //Remove Prev hover content
        $('.js-barra-hover-a-target-element .contents').html('');
        //Anima hover content
        clearTimeout(barraLateralBeneficios.timerHoverContentFade);
        barraLateralBeneficios.timerHoverContentFade = setTimeout(function(){
          $(content).appendTo('.js-barra-hover-a-target-element .contents');
          $('.js-barra-hover-a-target-element .contents').fadeIn(100);
        }, 100);
      });
    }, 300);

  },
  unmountHoverContents: function () {
    setTimeout(function(){
      $('.barra-lateral-beneficios-hover').removeClass('-open');
    }, 300);

  },
  initBotChat: function () {
    $('<div id="reactBotchat"></div>').insertAfter('div#footer');
    barraLateralBeneficios.createElementBotChat();
  },
  createElementBotChat: function () {
    var params = BotChat.queryParams(location.search);

    var user = {
      id: params['userid'] || 'userid',
      name: params['username'] || 'username'
    };

    var bot = {
      id: params['botid'] || 'botid',
      name: params['botname'] || 'botname'
    };

    BotChat.App({
      bot: bot,
      locale: params['locale'],
      resize: 'window',
      user: user,
      directLine: {
        secret: params['s'] || 'fn0aRhh3ycY.cwA.e_g.dCCEIbwWA6vmuh9nPL33IxOza4EoTWvh2UzkXfz4H5E',
        token: params['t'],
        domain: params['domain'],
        webSocket: params['webSocket'] && params['webSocket'] === 'true' // defaults to true
      },
      locale: 'pt-br'
    }, document.getElementById('reactBotchat'));

    var cookie = common.readCookie('chatbotCookie')
    if (!cookie) {
      barraLateralBeneficios.timeoutToOpenBotchat = setTimeout(function () {
        barraLateralBeneficios.openBotchat();
        barraLateralBeneficios.eventsBotChat();
      }, barraLateralBeneficios.timerCountToOpenBotchat);
    }else {
      barraLateralBeneficios.eventsBotChat();
    }

    setInterval(function () {

      if($('.wc-carousel')) {
        $('.wc-carousel').each(function () {

          var obj = $(this).find('ul');

          if(!obj.hasClass('owl-carousel')) {
              obj.addClass('owl-carousel');
              obj.owlCarousel({
                loop:true,
                margin:3,
                nav:true,
                items: 1,
                center:true,
                smartSpeed: 400,
                autoplay: true,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                stagePadding: 20
              });
          }
        })
      }

    }, 300);


  },
  eventsBotChat: function () {
    //Limpa o timeout que abre o chatbot
    clearTimeout(barraLateralBeneficios.timeoutToOpenBotchat);

    //fecha a barra
    barraLateralBeneficios.closeBarra();

    //ex: 'expires=Thu, 2 Dec 2025 12:00:00 UTC'
    //pega a data de hoje e soma mais 3 dias
    var myDate = new Date();
    var dayOfMonth = myDate.getDate();
    myDate.setDate(dayOfMonth + 1);
    var expiresDate = 'expires='+ myDate;

    var cookie = common.readCookie('chatbotCookie')
    if (!cookie) {
      common.createCookie('chatbotCookie', 'activated',  expiresDate);
    }

    $('#reactBotchat .wc-header span, #reactBotchat .wc-header #minimizeBotchatBt').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      //console.log('clicou no header do chat e > ', barraLateralBeneficios.isBotchatOpen);
      if (barraLateralBeneficios.isBotchatOpen) {
        $('#reactBotchat').removeClass('active');
        $('#reactBotchat').addClass('minimized');
        barraLateralBeneficios.isBotchatOpen = false;
      } else {
        $('#reactBotchat').addClass('active');
        $('#reactBotchat').removeClass('minimized');
        barraLateralBeneficios.isBotchatOpen = true;
        barraLateralBeneficios.callNeoassist();
      }
    });

    $('#reactBotchat .wc-header #closeBotchatBt').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('#reactBotchat').removeClass('minimized');
      $('#reactBotchat').removeClass('active');
      //console.log('clicou no fechar');
      barraLateralBeneficios.isBotchatOpen = false;
    });
  },
  callNeoassist: function() {

    if(barraLateralBeneficios.isNeoChatOpen) {
      sendPostMessage('ActiveModule:AI');
      barraLateralBeneficios.isNeoChatOpen = false;
    }
  }
}

$(function() {

  var page = window.location.pathname;
  var pageSplit = page.split('/');
  var linkSelectedId = $('#header .global_bar .brands li.active').attr('data-categoryid');

  $('body .breadcrumb li').each(function () {

    if ($(this).find('a').attr('href') == '/usereserva/c/faca-voce' || $(this).find('a').attr('href') == '/c/faca-voce') {
      //console.log('tem faca-voce');
      barraLateralBeneficios.removeBarraDOM = true;
      return false;
    } else if ($(this).find('a').attr('href') == '/usereserva/c/ahlma' || $(this).find('a').attr('href') == '/c/ahlma'){
      //console.log('tem ahlma');

      barraLateralBeneficios.addBarraAhlmaDOM = true;
      return false;
    }else {
      //console.log('NAO TEM AHLMA NAO TEM FV ');
      barraLateralBeneficios.removeBarraDOM = false;
      barraLateralBeneficios.addBarraAhlmaDOM = false;
    }

  })

  if (page != '/pedido_finalizado.html' && page != '/usereserva/confirmacao-do-pedido' && page != '/usereserva/c/faca-voce' && !($('body').hasClass('ahlma')) && page != '/usereserva/c/ahlma' && page != '/c/ahlma' && pageSplit[3] != 'ahlma' && linkSelectedId != 'cat4070001' && pageSplit[3] != 'faca-voce' && !barraLateralBeneficios.removeBarraDOM && !barraLateralBeneficios.addBarraAhlmaDOM){
    barraLateralBeneficios.initGeneral();
    $('div#header').after(barraLateralBeneficios.barraLateralElement);
    barraLateralBeneficios.eventsBarra();
    if (barraLateralBeneficios.isBotchatOn) {
      barraLateralBeneficios.initBotChat();
    }

  }else {
    if ((page == '/pedido_finalizado.html' || page == '/usereserva/c/ahlma' || $('body').hasClass('ahlma') || page == '/c/ahlma' || pageSplit[3] == 'ahlma' || linkSelectedId == 'cat4070001' || barraLateralBeneficios.addBarraAhlmaDOM) && !barraLateralBeneficios.removeBarraDOM) {
      barraLateralBeneficios.initAhlma();
      $('div#header').after(barraLateralBeneficios.barraLateralElement);
      barraLateralBeneficios.eventsBarra();
    }
  }

  // var _timeout = setTimeout(function () {
  //   $('body').find('.faixa-beneficios').remove();
  // }, 1000);

  $('.footer_bar ').remove();
  $('.back_top ').css('background-color', '#333');
  $('.back_top ').css('background-image', 'url(https://imagens.usereserva.com.br/rsv_assets/img/back_top.png)');
  $('.back_top ').css('background-repeat', 'no-repeat');
  $('.back_top ').css('background-position', '16px 12px');
  $('.back_top ').css('height', '27px');
  $('.back_top ').css('right', '65px');
  $('.back_top ').css('display', 'none');
});