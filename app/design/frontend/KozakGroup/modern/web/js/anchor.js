require([
    "jquery"
],
function($) {
    "use strict";

    $(document).ready(function(){

        $('.action.view[href^="#"]').bind('click.smoothscroll',function (e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 200
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

    });

});
