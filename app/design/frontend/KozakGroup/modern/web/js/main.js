require([
    "jquery", "slider"
],
function($) {
    "use strict";

    $(document).ready(function() {

        $('.related .product-items, .upsell .product-items').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        //Banner and  page title on PLP
        let bannerPLP = $(".category-view-inner");

        if ($(".products").length === 0 ) {
            bannerPLP.hide();
        }

        if (bannerPLP.length === 0 || bannerPLP.css('display') === 'none' ) {
            $(".page-title-wrapper").show();
        }


        //Filter on PLP
        $(".filter-title .close").click(function() {
            $('#layered-filter-block').animate({left: '-600'},300);
            $('.page-with-filter .page-main').removeClass('active-filter');
        });

        $(".toolbar-filter").click(function() {
            $('#layered-filter-block').animate({left: '0'},300);
            setTimeout(function () {
                $('.page-with-filter .page-main').addClass('active-filter');
            }, 600);
        });

        $(document).mouseup(function (e) {
            var div = $("#layered-filter-block");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                div.animate({left: '-600'},500);
                $('.page-with-filter .page-main').removeClass('active-filter');
            }
        });

    });

});
