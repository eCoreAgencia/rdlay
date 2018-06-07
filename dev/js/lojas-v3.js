var lojas = {
    init: function (shopId) {
        this.getLojas(shopId)
    },
    getLojas: function (shopId) {
        requestUrl = "https://rdlay.vtexcommercestable.com.br/api/dataentities/LJ/search?_fields=id,local,endereco,complemento,telefone,horario_semana,horario_sabado,latitude,longitude&_sort=local", shopId ? requestUrl += "&id=" + shopId : requestUrl += "&_sort=local", $.ajax({
            url: requestUrl,
            type: "GET",
            headers: {
                Accept: "application/vnd.vtex.masterdata.v10.profileSchema+json",
                "REST-Range": "resources=0-900"
            }
        }).done(function (data) {
            if (shopId) {
                var resultLoja = data[0],
                    source = $("#loja-template").html(),
                    template = Handlebars.compile(source),
                    html = template(resultLoja);
                $(".loja").html(html), lojas.initMap(resultLoja.latitude, resultLoja.longitude)
            } else {
                var resultLojas = {
                        Lojas: data
                    },
                    source = $("#lojas-template").html(),
                    template = Handlebars.compile(source),
                    html = template(resultLojas);
                $(".lojas__list").html(html), $(".lojas__list").slick({
                    adaptiveHeight: !0,
                    autoplay: !1,
                    pauseOnHover: !1,
                    arrows: !0,
                    dots: !1,
                    draggable: !0,
                    touchMove: !0,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    mobileFirst: !0,
                    responsive: [{
                        breakpoint: 767,
                        settings: {
                            arrows: !0,
                            draggable: !0,
                            touchMove: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 991,
                        settings: {
                            arrows: !0,
                            draggable: !0,
                            touchMove: !0,
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    }]
                }), shopId = data[Math.floor(Math.random() * data.length)].id, lojas.getLojas(shopId)
            }
        }).fail(function () {
            alert("Houve um erro ao carregar as lojas. Por favor, tente novamente.")
        })
    },
    initMap: function (lat, lng) {
        var map, coords = {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        };
        map = new google.maps.Map(document.getElementById("map"), {
            center: coords,
            zoom: 16,
            scrollwheel: !1,
            navigationControl: !1,
            mapTypeControl: !1
        });
        new google.maps.Marker({
            position: coords,
            map: map
        })
    }
};
$window.load(function () {
    lojas.init()
}), body.on("click", ".js-select-loja", function (event) {
    var lojaId = $(this).data("id");
    event.preventDefault(), lojas.getLojas(lojaId)
});