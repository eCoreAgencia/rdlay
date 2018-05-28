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
  hoverDesconto: '<div class="icon -desconto" style="margin-left:25px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.969 479.969" width="512" height="512"><path d="M396.169 34.38c-.535 0-1.069.055-1.594.162a208.991 208.991 0 0 1-151.664-26.88l-10.552-6.48a8 8 0 0 0-8.368 0l-10.552 6.48A208.993 208.993 0 0 1 61.775 34.51a7.999 7.999 0 0 0-9.6 7.864v245.92a177.905 177.905 0 0 0 24.352 89.92 171.294 171.294 0 0 0 79.368 70.792l69.08 30.296c2.04.891 4.36.891 6.4 0l69.104-30.296a171.147 171.147 0 0 0 11.44-5.528 8.002 8.002 0 0 0 3.316-10.82 8.002 8.002 0 0 0-10.82-3.316 155.874 155.874 0 0 1-10.36 5.008l-65.88 28.888-65.856-28.864a155.434 155.434 0 0 1-72-64.256 161.87 161.87 0 0 1-22.144-81.856V51.933a225.05 225.05 0 0 0 153.6-30.664l6.4-3.912 6.4 3.904a224.914 224.914 0 0 0 153.6 30.672v236.328a8 8 0 0 0 16 0V42.373a7.998 7.998 0 0 0-8.006-7.993z" fill="#b72025"/><path d="M227.593 60.059a8 8 0 0 0-11.417-2.982 175.2 175.2 0 0 1-122.4 20.728 7.999 7.999 0 0 0-9.6 7.848v191.12a135.55 135.55 0 0 0 20.088 70.928 138.932 138.932 0 0 0 65.216 55.696 8.001 8.001 0 0 0 10.472-4.288 8.001 8.001 0 0 0-4.288-10.472 122.988 122.988 0 0 1-57.76-49.304 119.61 119.61 0 0 1-17.728-62.56V95.125a190.951 190.951 0 0 0 124.08-24.256 8 8 0 0 0 3.337-10.81zM425.041 402.343a8 8 0 0 0-10.465-.026l-38.256 38.256c-2.667-.8-5.509-.8-8.176 0l-70.256-70.256a8 8 0 0 0-11.312 11.312l70.248 70.256c-2.369 8.398 2.52 17.127 10.918 19.495 1.442.407 2.935.606 4.434.593 8.837 0 16-7.163 16-16a15.707 15.707 0 0 0-.6-4.088l38.256-38.256a8 8 0 0 0-.791-11.286z" fill="#b72025"/><path d="M353.832 178.317l-32-32a8 8 0 0 0-11.312 0l-98.344 98.344-26.344-26.344a8 8 0 0 0-11.312 0l-32 32a8 8 0 0 0 0 11.312l64 64a8 8 0 0 0 11.312 0l136-136a8 8 0 0 0 0-11.312zM212.176 308.661l-52.656-52.688 20.656-20.688 26.4 26.344a8 8 0 0 0 11.312 0l98.288-98.344 20.72 20.688-124.72 124.688z" fill="#b72025"/></svg></div>\
    <div class="text -desconto" style="width:215px">\
    Contamos com selos de segurança para proteger os dados de nossos clientes!\
    </div>',

  hoverTrocaGratis: '<div class="icon -troca"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.025 512.025" width="512" height="512"><g fill="#b72025"><path d="M480.013 304.093c0 44.8-26.88 48-32 48H54.573l84.64-84.64-22.56-22.72-112 112c-6.204 6.241-6.204 16.319 0 22.56l112 112 22.56-22.56-84.64-84.64h393.44c22.08 0 64-16 64-80v-48h-32v48z"/><path d="M32.013 208.093c0-44.8 26.88-48 32-48h393.44l-84.64 84.64 22.56 22.56 112-112c6.204-6.241 6.204-16.319 0-22.56l-112-112-22.72 22.72 84.8 84.64H64.013c-22.08 0-64 16-64 80v48h32v-48z"/></g></svg></div>\
    <div class="text -troca">\
    A 1º Conta é por nossa conta! Pode solicitar sua troca para loja virtual ou loja física (mediante a aviso prévio)\
    </div>',

  hoverFreteGratis: '<div class="icon -frete"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 612 612"><path d="M181.298 386.264c-29.77 0-53.915 24.145-53.915 53.827 0 29.769 24.145 53.914 53.915 53.914 29.683 0 53.827-24.146 53.827-53.914 0-29.682-24.144-53.827-53.827-53.827zm0 80.827c-14.885 0-27-12.115-27-27 0-14.798 12.115-26.914 27-26.914 14.797 0 26.913 12.115 26.913 26.914 0 14.885-12.115 27-26.913 27zm-46.41-80.804H14.228a8.653 8.653 0 0 0-8.653 8.653v26.256a8.653 8.653 0 0 0 8.653 8.653h96.714c2.526-17.325 11.27-32.63 23.946-43.562zm328.093-.023c-29.684 0-53.827 24.145-53.827 53.827 0 29.769 24.144 53.914 53.827 53.914 29.769 0 53.826-24.146 53.826-53.914.001-29.682-24.057-53.827-53.826-53.827zm0 80.827c-14.885 0-26.914-12.115-26.914-27 0-14.798 12.029-26.914 26.914-26.914 14.884 0 26.913 12.115 26.913 26.914.001 14.885-12.029 27-26.913 27zm140.366-80.827h-21.029V268.658c0-13.759-4.154-27.259-11.856-38.683l-52.701-78.057c-12.809-19.039-34.356-30.462-57.375-30.462h-81.692c-9.52 0-17.308 7.702-17.308 17.308v247.5H227.683c12.635 10.99 21.375 26.222 23.885 43.615h141.144c4.933-34.355 34.529-60.923 70.27-60.923 35.739 0 65.336 26.567 70.355 60.923h70.01a8.623 8.623 0 0 0 8.653-8.654v-26.307a8.624 8.624 0 0 0-8.653-8.654zm-86.194-140.712H409.327a8.624 8.624 0 0 1-8.654-8.654v-59.797c0-4.76 3.896-8.654 8.654-8.654h65.683c2.855 0 5.539 1.384 7.097 3.634l42.145 59.884c4.065 5.712-.089 13.587-7.099 13.587zM320.192 368.956H17.307C7.749 368.956 0 361.208 0 351.649v-77.885c0-9.559 7.749-17.308 17.307-17.308h302.885c9.559 0 17.308 7.749 17.308 17.308v77.885c0 9.559-7.749 17.307-17.308 17.307zm-181.73-138.461H17.307C7.749 230.495 0 222.745 0 213.187v-77.884c0-9.559 7.749-17.308 17.307-17.308h121.154c9.559 0 17.308 7.749 17.308 17.308v77.884c.001 9.558-7.748 17.308-17.307 17.308zm181.73 0H199.039c-9.559 0-17.308-7.749-17.308-17.307v-77.885c0-9.559 7.749-17.307 17.308-17.307h121.154c9.559 0 17.308 7.749 17.308 17.307v77.885c-.001 9.557-7.75 17.307-17.309 17.307z" fill="#b72025"/></svg></div>\
    <div class="text -frete">\
    Na sua primeira compra ou no varejo acima de 199,99 e atacado 999,99\
    </div>',

  hoverPresente: '<div class="icon -presente"></div>\
    <div class="text -presente">\
      Os itens Reserva e Mini chegam embrulhados para presente com nota fiscal sem valores. Escolha a opção na sacola de compras.\
    </div>',
    //onclick="sendPostMessage(&#39;ActiveModule:AI&#39;);"
  hoverAjuda: '<div class="item">\
      <div class="title -bold">Tire dúvidas</div>\
      <div class="text -ajuda">\
        Fale com a gente e tire suas dúvidas sobre troca, prazos, pagamentos e o que mais você precisar!\
      </div>\
      <a href="javascript:void(0)" id="callToNeoassisChat" class="help ai-button button" onclick="sendPostMessage(&#39;ActiveModule:AI&#39;);">Perguntar</a>\
    </div>\
    <div class="item">\
      <div class="title -bold">Encontre o produto certo</div>\
      <div class="text -ajuda">\
        Nosso Chat te ajudar a achar produtos perfeitos para você, confira as recomendações!\
      </div>\
      <a id="callToBotChat" class="button">Receber Recomendações</a>\
    </div>',

  hoverAjudaAhlma: '<div class="item">\
      <div class="title -bold">Tire dúvidas</div>\
      <div class="text -ajuda">\
        Fale com a gente e tire suas dúvidas sobre troca, prazos, pagamentos e o que mais você precisar!\
      </div>\
      <a href="http://goo.gl/6jU2b5" target="_blank" class="help ai-button button">Perguntar</a>\
    </div>',

  hoverTelevendas: '<div class="icon -televendas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463.009 463.009" width="512" height="512"><path d="M462.692 381.085c-1.472-11.126-7.895-20.719-17.62-26.318L330.846 289c-13.99-8.055-31.738-5.71-43.157 5.708l-22.499 22.499c-5.987 5.988-15.459 6.518-22.028 1.231-17.737-14.272-35.201-29.979-51.906-46.685-16.705-16.705-32.412-34.168-46.685-51.906-5.287-6.57-4.758-16.041 1.231-22.029l22.498-22.499c11.418-11.417 13.766-29.163 5.709-43.156L108.242 17.937C102.642 8.211 93.05 1.789 81.924.317c-11.127-1.475-22.06 2.236-29.996 10.172L18.027 44.391c-23.661 23.662-24.041 66.944-1.07 121.875 22.088 52.818 63.308 110.962 116.065 163.721 52.759 52.758 110.903 93.978 163.722 116.066 27.039 11.307 51.253 16.957 71.697 16.956 21.088 0 38.163-6.013 50.178-18.027l33.901-33.902c7.935-7.936 11.643-18.869 10.172-29.995zm-139.33-79.086l114.226 65.767c5.649 3.252 9.379 8.824 10.233 15.286.718 5.423-.691 10.763-3.885 15.066L292.131 311.48l6.165-6.165c6.631-6.631 16.941-7.994 25.066-3.316zM79.956 15.188c6.463.855 12.034 4.585 15.286 10.234l65.767 114.226c4.68 8.127 3.316 18.435-3.315 25.065l-5.663 5.663L64.917 19.073c3.561-2.637 7.82-4.069 12.26-4.069.921 0 1.85.061 2.779.184zm328.055 419.187c-18.798 18.798-57.244 18.01-105.48-2.162-51.06-21.352-107.491-61.424-158.901-112.833-51.41-51.41-91.482-107.842-112.834-158.901-20.173-48.237-20.96-86.683-2.162-105.482l25.167-25.168 87.245 151.532-5.851 5.851c-11.415 11.416-12.409 29.488-2.311 42.04 14.609 18.156 30.68 36.024 47.764 53.108 17.086 17.085 34.954 33.156 53.109 47.765 12.55 10.098 30.622 9.105 42.04-2.312l5.338-5.338 152.016 86.759-25.14 25.141z" fill="#b72025"/></svg></div>\
    <div class="text -televendas">\
      Nosso horário de funcionamento:<br/><br/>\
      Seg à sex - 7h às 22h<br/><br/>\
      Sáb - 8h às 14h\
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