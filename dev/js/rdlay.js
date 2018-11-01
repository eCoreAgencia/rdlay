!function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera);
;$.getScript("http://io.vtex.com.br/vtex.js/2.2.0/vtex.min.js");
var lazyload = new LazyLoad({
    elements_selector: "[data-original]"
});
Number.prototype.formatMoney = function(c, d, t) {
    var n = this;
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = void 0 === d ? "." : d,
    t = void 0 === t ? "," : t;
    var s = n < 0 ? "-" : ""
      , i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + ""
      , j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")
}
;
var updateCartQuantity = function(orderForm) {
    var count = 0
      , items = orderForm.items;
    items.length > 0 && items.forEach(function(item) {
        count += item.quantity
    }),
    $(".js-cart-items-count").text(count)
}
  , mountCart = function(orderForm) {
    var _result = orderForm
      , source = $("#minicart-template").html()
      , template = Handlebars.compile(source)
      , context = _result
      , html = template(context);
    $(".minicart").html(html),
    setTimeout(function() {
        $(".minicart__item").each(function(index, el) {
            $(this).attr("data-index", index)
        })
    }, 100),
    $(".buy-together__products").length > 0 && productPage.updateCombinedProductsTotal()
}
  , getItemIndex = function(skuId, orderForm) {
    for (i = 0; i < orderForm.items.length; i++)
        if (orderForm.items[i].id == skuId)
            return i;
    return -1
}
  , addToCart = function(items, btn) {
    btn.prop("disabled", !0).addClass("is-loading"),
    vtexjs.checkout.getOrderForm(["items", "totalizers"]).then(function(orderForm) {
        return vtexjs.checkout.addToCart(items)
    }).done(function(orderForm) {
        updateCartQuantity(orderForm),
        mountCart(orderForm),
        $(".js-open-minicart").trigger("click")
    }).fail(function(xhr, textStatus, err) {
        alert("Houve um erro ao adicionar o produto na sacola. Tente novamente.")
    }).always(function() {
        btn.prop("disabled", !1).removeClass("is-loading")
    })
}
  , getPriceAtacado = function(priceVarejo) {
    var priceAtacado = parseFloat(priceVarejo.substr(3).replace(",", ".") / 2);
    return priceAtacado.formatMoney(2, ",", ".")
}
  , shelfPriceAtacado = function() {
    try {
        $(".prateleira").find(".shelf-product").each(function(index, el) {
            "" == $(el).find(".js-print-half-product-price").text() && $(el).find(".js-print-half-product-price").text("R$ " + getPriceAtacado($(el).find(".js-get-product-price").text()))
        })
    } catch (e) {}
};
Handlebars.registerHelper("formatMoney", function(price) {
    var p = price / 100;
    return "R$ " + p.formatMoney(2, ",", ".")
}),
Handlebars.registerHelper("formatLookbookMoney", function(items) {
    for (var i = items.length - 1; i >= 0; i--)
        if (items[i].sellers[0].commertialOffer.AvailableQuantity > 0) {
            var price = items[i].sellers[0].commertialOffer.Price;
            return "R$ " + price.formatMoney(2, ",", ".")
        }
}),
Handlebars.registerHelper("priceAtacado", function(items) {
    for (var i = items.length - 1; i >= 0; i--)
        if (items[i].sellers[0].commertialOffer.AvailableQuantity > 0) {
            var price = items[i].sellers[0].commertialOffer.Price / 2;
            return "R$ " + price.formatMoney(2, ",", ".")
        }
}),
Handlebars.registerHelper("ifLookbookProductAvailable", function(items, options) {
    for (var i = items.length - 1; i >= 0; i--)
        if (items[i].sellers[0].commertialOffer.AvailableQuantity > 0)
            return options.fn(this);
    return options.inverse(this)
}),
Handlebars.registerHelper("getReference", function(slug) {
    return ref = slug.split("-"),
    ref[ref.length - 1]
}),
Handlebars.registerHelper("replaceImageSize", function(image, width, height) {
    var formattedUrl = image.substr(27).split("/")
      , newUrl = "";
    formattedUrl[3] = formattedUrl[3] + "-" + width + "-" + height;
    for (var i = 0; i <= formattedUrl.length - 1; i++)
        newUrl += 0 === i ? formattedUrl[0] : "/" + formattedUrl[i];
    return newUrl
}),
Handlebars.registerHelper("formatMinicartImage", function(image) {
    return image.substr(27).replace("73-73", "80-115")
}),
Handlebars.registerHelper("amountAvailable", function(amount) {
    return amount = parseInt(amount),
    1 === amount ? "1 peça disponível" : amount > 1 ? amount + " peças disponíveis" : "Nenhum produto selecionado"
}),
Handlebars.registerHelper("ifIsAtacado", function(items, options) {
    var total = 0;
    return items.forEach(function(item) {
        total += item.quantity
    }),
    total >= 10 ? options.fn(this) : options.inverse(this)
}),
Handlebars.registerHelper("howManyToDiscount", function(items) {
    var total = 0;
    return items.forEach(function(item) {
        total += item.quantity
    }),
    10 - total
}),
Handlebars.registerHelper("minicartTotals", function(totalizers) {
    var total = 0;
    return total = totalizers.length > 1 ? "Discounts" === totalizers[1].id ? Math.abs(totalizers[1].value) / 100 : totalizers[2] && "Discounts" === totalizers[2].id ? Math.abs(totalizers[2].value) / 100 : Math.abs(totalizers[0].value) / 100 : Math.abs(totalizers[0].value) / 100,
    "R$ " + total.formatMoney(2, ",", ".")
}),
Handlebars.registerHelper("ifCond", function(v1, operator, v2, options) {
    switch (operator) {
    case "==":
        return v1 == v2 ? options.fn(this) : options.inverse(this);
    case "===":
        return v1 === v2 ? options.fn(this) : options.inverse(this);
    case "<":
        return v1 < v2 ? options.fn(this) : options.inverse(this);
    case "&lt;":
        return v1 < v2 ? options.fn(this) : options.inverse(this);
    case "<=":
        return v1 <= v2 ? options.fn(this) : options.inverse(this);
    case "&lt;=":
        return v1 <= v2 ? options.fn(this) : options.inverse(this);
    case ">":
        return v1 > v2 ? options.fn(this) : options.inverse(this);
    case "&gt;":
        return v1 > v2 ? options.fn(this) : options.inverse(this);
    case ">=":
        return v1 >= v2 ? options.fn(this) : options.inverse(this);
    case "&gt;=":
        return v1 >= v2 ? options.fn(this) : options.inverse(this);
    case "&&":
        return v1 && v2 ? options.fn(this) : options.inverse(this);
    case "||":
        return v1 || v2 ? options.fn(this) : options.inverse(this);
    default:
        return options.inverse(this)
    }
});
var $window = $(window), $document = $(document), winWidth = $window.width(), htmlBody = $("html, body"), body = $("body"), img = $("img"), header = $("#header"), headerFixed = $(".header--fixed"), sidePanelMobile = $(".side-panel"), sidePanelBackdrop = $(".side-panel-backdrop"), slider = $(".slider"), minicart = $(".minicart"), filtros = $(".search-navigator-wrap"), shelf = $(".prateleira"), paginatedShelf = $(".prateleira[id*=ResultItems]"), modalMedidas = $(".size-modal"), logoGTX = $('[href*="gtx.ag"]'), urlGTX = logoGTX.attr("href"), theScrollTop = $window.scrollTop(), isMobileSize = winWidth < 768, isMobile = jQuery.browser.mobile, isLocalhost, timer, userTimer, currentScrollTop;
isLocalhost = window.location.host.indexOf("localhost") > -1 || window.location.host.indexOf("192") > -1;
var lightbox = function(videoId) {
    $(".video-wrapper").hide(),
    $("#" + videoId).show(),
    $(".lightbox").fadeIn(),
    window.ytActiveVideo = videoId,
    window.ytp[videoId].playVideo()
};
$(function() {
    isLocalhost || vtexjs.checkout.getOrderForm().done(function(orderForm) {
        updateCartQuantity(orderForm),
        mountCart(orderForm)
    }),
    $(".search-navigator-wrap").css("opacity", "1"),
    theScrollTop > 400 ? headerFixed.addClass("is-visible") : headerFixed.removeClass("is-visible"),
    $(".helperComplement").length && $(".helperComplement").remove(),
    shelfPriceAtacado(),
    body.on("click", ".filtros__toggle", function(event) {
        $(".menu-departamento").toggleClass("fechado"),
        $(".filtros__toggle i").toggleClass("fechado").toggleClass("aberto")
    }),
    body.on("click", ".js-open-menu-mobile", function(event) {
        event.preventDefault(),
        sidePanelMobile.addClass("is-visible"),
        sidePanelBackdrop.fadeIn(300)
    }),
    body.on("click", ".js-close-menu-mobile", function(event) {
        event.preventDefault(),
        sidePanelMobile.removeClass("is-visible"),
        sidePanelBackdrop.fadeOut(300)
    }),
    body.on("click", ".js-mobile-submenu", function(event) {
        if (event.preventDefault(),
        $(this).parent().siblings("li").hasClass("is-open")) {
            var itemOpen = $(this).parent().parent().find(".is-open");
            itemOpen.removeClass("is-open").find(".side-panel__submenu").slideUp(300),
            $(this).parent().addClass("is-open").find(".side-panel__submenu").slideDown(300)
        } else
            $(this).parent().hasClass("is-open") ? $(this).parent().removeClass("is-open").find(".side-panel__submenu").slideUp(300) : $(this).parent().addClass("is-open").find(".side-panel__submenu").slideDown(300)
    }),
    body.on("click", ".js-video-lightbox", function(event) {
        var id = $(this).data("video");
        lightbox(id)
    }),
    body.on("click tap", ".lightbox *:not(iframe)", function(event) {
        var video = window.ytActiveVideo;
        $(".lightbox").fadeOut(),
        window.ytp[video].stopVideo()
    }),
    body.on("click", ".js-back-to-top", function(event) {
        event.preventDefault(),
        htmlBody.animate({
            scrollTop: 0
        }, 300)
    }),
    body.on("click", ".image-zoom", function(event) {
        event.preventDefault()
    }),
    body.on("click", ".js-open-minicart", function(event) {
        event.preventDefault(),
        minicart.addClass("is-visible"),
        body.append('<div class="minicart__backdrop js-close-minicart"></div>')
    }),
    body.on("click", ".js-close-minicart", function(event) {
        event.preventDefault(),
        htmlBody.removeClass("no-scroll").find(".minicart__backdrop").remove(),
        minicart.removeClass("is-visible")
    }),
    body.on("click", ".js-minicart-qty", function(event) {
        var updatedQty, behaviour = $(this).data("behaviour"), item = $(this).closest(".minicart__item"), i = item.data("index"), itemCount = item.find(".minicart__sku-count"), qty = parseInt(itemCount.text());
        event.preventDefault();
        try {
            vtexjs.checkout.getOrderForm(["items", "loggedIn", "totalizers"]).then(function(orderForm) {
                var itemToUpdate = orderForm.items[i];
                return updatedQty = "decrement" === behaviour ? qty > 1 ? qty - 1 : qty : qty + 1,
                itemToUpdate.index = i,
                itemToUpdate.quantity = updatedQty,
                itemCount.text(updatedQty),
                vtexjs.checkout.updateItems([itemToUpdate])
            }).done(function(orderForm) {
                updateCartQuantity(orderForm),
                mountCart(orderForm)
            })
        } catch (e) {}
    }),
    body.on("click", ".js-minicart-remove-item", function(event) {
        var item = $(this).closest(".minicart__item")
          , i = item.data("index")
          , productName = $(this).siblings(".minicart__product-name").text();
        productName += " " + $(this).siblings(".minicart__sku-name").text(),
        event.preventDefault();
        try {
            confirm("Você reamente deseja remover " + productName + " do carrinho?") && vtexjs.checkout.getOrderForm(["items", "loggedIn", "totalizers"]).then(function(orderForm) {
                var itemToRemove = orderForm.items[i];
                return itemToRemove.index = i,
                vtexjs.checkout.removeItems([itemToRemove])
            }).done(function(orderForm) {
                updateCartQuantity(orderForm),
                mountCart(orderForm)
            })
        } catch (e) {}
    }),
    body.on("click", ".js-open-medidas", function(event) {
        event.preventDefault(),
        modalMedidas.fadeIn(150)
    }),
    body.on("click", ".js-close-medidas", function(event) {
        event.preventDefault(),
        modalMedidas.fadeOut(150)
    }),
    body.on("submit", ".js-search-form", function(event) {
        event.preventDefault();
        var query = escape($(this).find("input").val());
        window.location = "/" + query
    });
    try {
        $(".bread-crumb").find("li:first-child a").text("Home")
    } catch (e) {}
    if (filtros.length > 0)
        try {
            filtros.find('input[type="checkbox"]').vtexSmartResearch({
                elemLoading: '<i class="shelf__loading"></i>',
                returnTopText: "",
                ajaxCallback: function() {
                    shelfPriceAtacado()
                },
                shelfCallback: function() {
                    shelfPriceAtacado()
                },
                callback: function() {
                    filtros.find(".search-multiple-navigator").addClass("clearfix"),
                    $(".menu-departamento").before('<div class="filtros__toggle"><span>Filtros</span><i class="aberto"></i></div>'),
                    $(".menu-departamento").height($(".menu-departamento").height())
                }
            })
        } catch (e) {}
    else
        try {
            paginatedShelf.QD_infinityScroll({
                elemLoading: '<i class="shelf__loading"></i>',
                callback: function() {
                    shelfPriceAtacado()
                }
            })
        } catch (e) {}
    try {
        slider.slick({
            adaptiveHeight: !0,
            autoplay: !0,
            autoplaySpeed: 5e3,
            pauseOnHover: !1,
            arrows: !1,
            dots: !0,
            draggable: !0,
            touchMove: !0,
            slidesToShow: 1,
            slidesToScroll: 1
        })
    } catch (e) {}
    try {
        $(".has-carousel").find(".prateleira").find("ul").slick({
            adaptiveHeight: !0,
            autoplay: !1,
            autoplaySpeed: 5e3,
            pauseOnHover: !1,
            arrows: !0,
            dots: !1,
            draggable: !0,
            touchMove: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: !0,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !0,
                    draggable: !0,
                    touchMove: !0,
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 479,
                settings: {
                    arrows: !0,
                    draggable: !0,
                    touchMove: !0,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        })
    } catch (e) {}
    try {
        var orderList = $(".order-list");
        orderList.find("link").remove(),
        orderList.find(".page-header").unwrap(".container"),
        $window.load(function() {
            orderList.find(".repeat-order").each(function(i, el) {
                $(this).prepend('<a class="btn btn--ghost" target="_blank" href="http://meuspedidos.rdlayshop.com.br/">Trocar</a>')
            })
        })
    } catch (e) {}
    try {
        $(".orderBy").find("option").first().text("Ordenar por:")
    } catch (e) {}
    logoGTX.attr("href", urlGTX + "?utm_source=rdlay&utm_medium=logo&utm_campaign=logo_cliente"),
    $("#fale-conosco").on("submit", function(event) {
        event.preventDefault();
        var nome = $("#nome").val()
          , email = $("#email").val()
          , telefone = $("#telefone").val()
          , mensagem = $("#mensagem").val();
        $.ajax({
            url: "http://api.vtexcrm.com.br/rdlay/dataentities/CF/documents",
            type: "POST",
            headers: {
                accept: "application/vnd.vtex.masterdata.v10+json",
                "content-type": "application/json; charset=utf-8"
            },
            data: JSON.stringify({
                nome: nome,
                email: email,
                telefone: telefone,
                mensagem: mensagem
            })
        }).done(function() {
            $("#fale-conosco").find("input, textarea").val(""),
            alert("Cadastro realizado com sucesso!")
        }).fail(function() {
            alert("Algo deu errado. Tente novamente!")
        })
    }),
    $("#form-multimarcas").on("submit", function(event) {
        event.preventDefault();
        var address = $("#endereco").val()
          , celphone = $("#cel").val()
          , city = $("#cidade").val()
          , complement = $("#complemento").val()
          , document = $("#cpf-cnpj").val()
          , email = $("#email").val()
          , name = $("#nome").val()
          , neighborhood = $("#bairro").val()
          , state = $("#uf").val()
          , telephone = $("#tel").val()
          , type = $("#tipo").val()
          , zipcode = $("#cep").val();
        $.ajax({
            url: "http://api.vtexcrm.com.br/rdlay/dataentities/MM/documents",
            type: "POST",
            headers: {
                accept: "application/vnd.vtex.masterdata.v10+json",
                "content-type": "application/json; charset=utf-8"
            },
            data: JSON.stringify({
                name: name,
                email: email,
                celphone: celphone,
                telephone: telephone,
                address: address,
                city: city,
                complement: complement,
                document: document,
                neighborhood: neighborhood,
                state: state,
                zipcode: zipcode,
                type: type
            })
        }).done(function() {
            $("#form-multimarcas").find("input").val(""),
            alert("Cadastro realizado com sucesso!")
        }).fail(function() {
            alert("Algo deu errado. Tente novamente!")
        })
    }),
    $(".newsletter").on("submit", function(event) {
        event.preventDefault();
        var nome = $("#newsletter-name").val()
          , email = $("#newsletter-email").val();
        $.ajax({
            crossDomain: !0,
            url: "http://api.vtexcrm.com.br/rdlay/dataentities/NL/search?_fields=email&email=" + email,
            method: "GET",
            headers: {
                "rest-range": "resources=0-49",
                accept: "application/vnd.vtex.masterdata.v10.profileSchema+json"
            }
        }).done(function(data) {
            0 === data.length ? $.ajax({
                url: "http://api.vtexcrm.com.br/rdlay/dataentities/NL/documents",
                type: "POST",
                headers: {
                    accept: "application/vnd.vtex.masterdata.v10+json",
                    "content-type": "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    nome: nome,
                    email: email
                })
            }).done(function(response) {
                console.log(response),
                $(this).find("input").val(""),
                alert("cadastrado com sucesso!")
            }).fail(function() {
                alert("Algo deu errado, tente novamente!")
            }) : alert('E-mail "' + email + '" já cadastrado.')
        })
    })
}),
$window.resize(function() {
    winWidth = $window.width(),
    isMobileSize = winWidth < 768
}),
$window.scroll(function(event) {
    theScrollTop = $(this).scrollTop(),
    theScrollTop > 400 ? headerFixed.addClass("is-visible") : headerFixed.removeClass("is-visible")
});
