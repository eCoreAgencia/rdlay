var skuSelectorList = $(".js-sku-list"),
    buyTogether = $(".product-buy-together"),
    totalSkuPrice = 0,
    skuList, combinedProductId, selfProduct, combinedProduct, formatSkuJsonPrice = function(price) {
        return "R$ " + parseFloat(price / 100).formatMoney(2, ",", ".")
    },
    productPage = {
        init: function() {
            var productId = skuJson.productId;
            this.getPrice(), this.updateBreadcrumb(), $.ajax({
                crossDomain: !0,
                url: "/api/catalog_system/pub/products/search/?fq=productId:" + productId,
                type: "GET"
            }).done(function(product, textStatus, xhr) {
                combinedProductId = product[0]["Compre Junto"], skuList = product[0].items, selfProduct = product[0], productPage.skuSelector(product[0]);
                try {
                    productPage.getMaterial(product[0].Material[0])
                } catch (e) {}
                try {
                    productPage.getMedidas(product[0].Medidas[0])
                } catch (e) {}
                combinedProductId && $.ajax({
                    crossDomain: !0,
                    url: "/api/catalog_system/pub/products/search/?fq=productId:" + combinedProductId[0],
                    type: "GET"
                }).done(function(item, textStatus, xhr) {
                    combinedProduct = item[0];
                    try {
                        productPage.getCombinedProducts(selfProduct, combinedProduct), $(".buy-together__unavaiable").is(":visible") ? $(".buy-together__result-price-wrap").fadeOut() : $(".buy-together__result-price-wrap").fadeIn()
                    } catch (e) {}
                })
            }).fail(function(xhr, textStatus) {
                console.error(textStatus), console.error(xhr), confirm("Houve um erro no carregamento da página. Por favor, tente novamente.") && window.location.reload(!0)
            })
        },
        getPrice: function() {
            try {
                if (skuJson.available) {
                    for (var skus = skuJson.skus, skusLength = skus.length, skuBestPrice = skus[0].bestPrice, skuListPrice = skus[0].listPrice, i = 1; skusLength > i; i++) skus[i].bestPrice < skuBestPrice && (skuBestPrice = skus[i].bestPrice, skuListPrice = skus[i].listPrice);
                    if (skuListPrice > 0) {
                        var oldPriceHtml = "";
                        oldPriceHtml += '<span class="valor-de">', oldPriceHtml += "<span>de</span>", oldPriceHtml += '<span class="skuListPrice">', oldPriceHtml += formatSkuJsonPrice(skuListPrice), oldPriceHtml += "</span>", oldPriceHtml += "</span>", $(".product-price-value--varejo").prepend(oldPriceHtml), $(".valor-por").prepend("<span>por</span>")
                    }
                    $(".skuBestPrice").text(formatSkuJsonPrice(skuBestPrice)), $(".product-price-value--atacado").text(formatSkuJsonPrice(skuBestPrice / 2))
                } else $(".product-prices").addClass("is-unavailable").html('<p class="product-unavailable">Produto indisponível</p>')
            } catch (e) {}
        },
        getSkuName: function(skuId) {
            for (var i = skuList.length - 1; i >= 0; i--)
                if (skuList[i].itemId == skuId) return skuList[i].nameComplete
        },
        updateBreadcrumb: function() {
            $(".bread-crumb").find("ul").find(".last").removeAttr("class").parent("ul").append('<li class="last" typeof="v:Breadcrumb">' + $(".productName").text() + "</li>")
        },
        updateSkuPrice: function() {
            var amountItems = $(".amount-items"),
                theBtn = $(".add-to-cart-button"),
                skuInputs = $(".sku-list__qty"),
                totalSkuPrice = 0,
                totalItems = 0,
                priceNode = "",
                theFinalPrice = 0;
            skuInputs.each(function(index, el) {
                var amount = parseInt($(this).val()),
                    skuPrice = 0;
                totalItems += amount, skuPrice = parseFloat($(this).data("sku-price") * amount), totalSkuPrice += skuPrice
            }), totalSkuPrice > 0 ? (priceNode += 1 == totalItems ? "Total de 1 item" : "Total de " + totalItems + " itens", theFinalPrice = totalItems >= 20 ? parseFloat(totalSkuPrice / 2) : parseFloat(totalSkuPrice), priceNode += '<span class="block">', priceNode += '<span class="amount-price">', priceNode += "R$ " + theFinalPrice.formatMoney(2, ",", "."), priceNode += "</span> ", priceNode += "</span>", amountItems.html(priceNode), theBtn.prop("disabled", !1)) : (amountItems.text("Nenhum produto selecionado"), theBtn.prop("disabled", !0))
        },
        updateCombinedProducts: function(el) {
            var sku, price, id = el.attr("id"),
                color = el.find(".sku-selector-cor").val(),
                size = el.find(".sku-selector-tamanho").val(),
                product = window[id].items;
            for (i = 0; i < product.length; i++) product[i].Cor[0] == color && product[i].Tamanho[0] == size && (sku = product[i]);
            price = sku.sellers[0].commertialOffer.Price, el.find("img").attr("src", "https://rdlay.vteximg.com.br/arquivos/ids/" + sku.images[0].imageId + "-280-400"), el.attr("data-sku-id", sku.itemId), sku.sellers[0].commertialOffer.AvailableQuantity ? ($(".js-buy-together-button").attr("disabled", ""), el.find(".buy-together__product-prices .varejo").html("R$ " + price.formatMoney("2", ",", ".")), el.find(".buy-together__product-prices .atacado").html("R$ " + (price / 2).formatMoney("2", ",", ".")), el.find(".buy-together__product-prices").show(), el.find(".buy-together__unavaiable").hide(), el.attr("data-price", sku.sellers[0].commertialOffer.Price), 0 == $(".buy-together__unavaiable").is(":visible") && $(".js-buy-together-button").removeAttr("disabled")) : ($(".js-buy-together-button").attr("disabled", ""), el.find(".buy-together__product-prices").hide(), el.find(".buy-together__unavaiable").show(), el.attr("data-price", sku.sellers[0].commertialOffer.Price)), $(".buy-together__unavaiable").is(":visible") ? $(".buy-together__result-price-wrap").fadeOut() : $(".buy-together__result-price-wrap").fadeIn(), productPage.updateCombinedProductsTotal()
        },
        updateCombinedProductsTotal: function() {
            var itemsInCart = 0,
                total = parseFloat($(".self-product").attr("data-price")) + parseFloat($(".combined-product").attr("data-price"));
            vtexjs.checkout.getOrderForm().done(function(orderForm) {
                for (i = 0; i < orderForm.items.length; i++) itemsInCart += orderForm.items[i].quantity;
                itemsInCart >= 18 && (total /= 2), $(".buy-together__result-price").html("R$ " + total.formatMoney("2", ",", "."))
            })
        },
        skuSelector: function(product) {
            var colors = [],
                skus = product.items;
            skus.forEach(function(sku) {
                var rowTemplate = $("#sku-list-row-template").html(),
                    rowTemplateCompile = Handlebars.compile(rowTemplate),
                    rowContext = sku,
                    row = rowTemplateCompile(rowContext),
                    skuColor = sku.Cor[0],
                    itemTemplate = $("#sku-list-item-template").html(),
                    itemTemplateCompile = Handlebars.compile(itemTemplate),
                    itemContext = sku,
                    skuItem = itemTemplateCompile(itemContext); - 1 !== $.inArray(skuColor, colors) ? $('[data-cor="' + skuColor + '"]').append(skuItem) : (colors.push(skuColor), skuSelectorList.append(row), $('[data-cor="' + skuColor + '"]').append(skuItem))
            }), productPage.updateSkuPrice()
        },
        getZoomImage: function(skuList, skuId) {
            for (var i = 0; i < skuList.length; i++)
                if (skuList[i].itemId == skuId) {
                    var skuItem = skuList[i],
                        zoomImageTemplate = $("#sku-zoom-image-template").html(),
                        zoomImageCompile = Handlebars.compile(zoomImageTemplate),
                        zoomImage = zoomImageCompile(skuItem),
                        zoomThumbsTemplate = $("#sku-zoom-thumbnails-template").html(),
                        zoomThumbsCompile = Handlebars.compile(zoomThumbsTemplate),
                        zoomThumbs = zoomThumbsCompile(skuItem);
                    return $("#show").html(zoomImage).append(zoomThumbs), void $(fix_zoom)
                }
        },
        getCombinedProducts: function(selfItem, combinedItem) {
            function _getAllVariations(product, variation) {
                var i = 0,
                    arr = [],
                    data = "";
                for (i = 0; i < product.length; i++) - 1 == $.inArray(product[i][variation][0], arr) && (arr.push(product[i][variation][0]), data += '<option value="' + product[i][variation][0] + '">' + product[i][variation][0] + "</option>");
                return data
            }
            var compiledHtml, template = $("#buy-together-template").html(),
                templateCompile = Handlebars.compile(template),
                selfItems = selfItem.items,
                combinedItems = combinedItem.items,
                products = {
                    self: {
                        name: selfItems[0].complementName,
                        image: "https://rdlay.vteximg.com.br/arquivos/ids/" + selfItems[0].images[0].imageId + "-280-400",
                        price: 100 * selfItems[0].sellers[0].commertialOffer.Price,
                        discountedPrice: selfItems[0].sellers[0].commertialOffer.Price / 2 * 100,
                        firstSkuId: selfItems[0].itemId
                    },
                    combined: {
                        name: combinedItems[0].complementName,
                        image: "https://rdlay.vteximg.com.br/arquivos/ids/" + combinedItems[0].images[0].imageId + "-280-400",
                        price: 100 * combinedItems[0].sellers[0].commertialOffer.Price,
                        discountedPrice: combinedItems[0].sellers[0].commertialOffer.Price / 2 * 100,
                        firstSkuId: combinedItems[0].itemId
                    },
                    totalPrice: 100 * (selfItems[0].sellers[0].commertialOffer.Price + combinedItems[0].sellers[0].commertialOffer.Price)
                };
            products.self.colors = _getAllVariations(selfItems, "Cor"), products.self.sizes = _getAllVariations(selfItems, "Tamanho"), products.combined.colors = _getAllVariations(combinedItems, "Cor"), products.combined.sizes = _getAllVariations(combinedItems, "Tamanho"), compiledHtml = templateCompile(products), $(".product-buy-together").append(compiledHtml), productPage.updateCombinedProducts($(".combined-product")), productPage.updateCombinedProducts($(".self-product")), $(".product-buy-together").css("display", "block")
        },
        getMaterial: function(material) {
            $(".js-get-material").html(material)
        },
        getMedidas: function(medidas) {
            $(".js-get-medidas").html(medidas)
        }
    },
    fix_zoom = function() {
        window.LoadZoom = function(pi) {
            var zoomImage = $(".image-zoom");
            if (zoomImage.length <= 0) return !1;
            $(".zoomPup, .zoomWindow, .zoomPreload").remove();
            var zoomEl = $("#image").addClass("easyzoom easyzoom--overlay"),
                zoom = zoomEl.easyZoom(),
                zoomAPI = zoom.data("easyZoom"),
                thumbs = $(".thumbs");
            isMobile && zoomAPI.teardown(), $(".easyzoom").append('<div class="zoom-loading"></div>'), thumbs.on("click", "a", function(event) {
                var imgUri = $(this).attr("rel"),
                    zoomUri = $(this).attr("zoom");
                event.preventDefault(), isMobile && zoomAPI._init(), zoomAPI.swap(imgUri, zoomUri), thumbs.find("a").removeClass("ON"), $(this).addClass("ON"), isMobile && zoomAPI.teardown()
            })
        }, LoadZoom(0)
    };
$(fix_zoom), productPage.init(), skuSelectorList.on("click", ".js-change-sku-qty", function(event) {
    event.preventDefault();
    var behaviour = $(this).data("iteration"),
        availableQty = $(this).parent().parent().find(".sku-list__available-quantity").text().trim().split(" "),
        siblingInput = $(this).siblings(".sku-list__qty"),
        siblingInputVal = parseInt(siblingInput.val());
    if ("increment" === behaviour) {
        if (siblingInputVal == availableQty[0]) return;
        siblingInputVal++, siblingInput.val(siblingInputVal)
    } else {
        if (0 === siblingInputVal) return;
        siblingInputVal--, siblingInput.val(siblingInputVal)
    }
    productPage.updateSkuPrice()
}), skuSelectorList.on("change", ".sku-list__qty", function(event) {
    event.preventDefault();
    var thisVal = $(this).val(),
        available = $(this).parent().parent().find(".sku-list__available-quantity").text().trim().split(" ");
    parseInt(thisVal) > available[0] ? $(this).val(available[0]) : "" == thisVal && $(this).val(0), productPage.updateSkuPrice()
}), body.on("click", ".js-zoom-image", function(event) {
    var skuId = $(this).data("sku-id");
    event.preventDefault(), productPage.getZoomImage(skuList, skuId)
}), body.on("click", ".js-add-to-cart", function(event) {
    if (event.preventDefault(), !$(this).prop("disabled")) {
        var items = [],
            skuInputs = $(".sku-list__qty");
        skuInputs.each(function(index, el) {
            $(this).val() > 0 && items.push({
                id: $(this).closest(".sku-list__item").data("sku-id"),
                quantity: $(this).val(),
                seller: 1
            })
        }), addToCart(items, $(this))
    }
}), body.on("click", ".js-notify-me", function(event) {
    var productId = skuJson.productId,
        skuId = $(this).closest(".sku-list__item").data("sku-id");
    event.preventDefault(), $(".js-notify-content").notifyMe(productId, {
        strings: {
            title: "",
            explanation: "Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo.",
            namePlaceholder: "Nome",
            emailPlaceholder: "E-mail",
            loading: "Carregando...",
            success: "Cadastrado com sucesso. Assim que o produto for disponibilizado você receberá um email avisando.",
            error: "Não foi possível cadastrar. Tente mais tarde.",
            emailErrorMessage: "O endereço de e-mail informado é inválido."
        }
    }), $(".notify-me").fadeIn(150, function() {
        $(".notify-me__title").html('Avise-me quando o produto <span class="notify-me__sku-name">' + productPage.getSkuName(skuId) + "</span> estiver disponível"), $(".notifyme-skuid").val(skuId), htmlBody.addClass("has-no-scroll")
    })
}), body.on("click", ".js-close-notify", function(event) {
    event.preventDefault(), $(".notify-me").fadeOut(150, function() {
        htmlBody.removeClass("has-no-scroll")
    })
}), body.on("click", ".js-buy-together-button", function(event) {
    if (event.preventDefault(), !$(this).prop("disabled")) {
        var items = [{
            id: $(".self-product").attr("data-sku-id"),
            quantity: 1,
            seller: 1
        }, {
            id: $(".combined-product").attr("data-sku-id"),
            quantity: 1,
            seller: 1
        }];
        addToCart(items, $(this))
    }
}), body.on("change", ".buy-together__sku-selector", function() {
    productPage.updateCombinedProducts($(this).parents(".buy-together__product"))
}), $window.load(function() {
    $(".shipping-value").trigger("click")
}), $document.ajaxComplete(function(event, xhr, settings) {
    $(".freight-btn").val("Calcular")
});
