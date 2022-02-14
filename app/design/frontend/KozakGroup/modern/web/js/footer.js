require([
    "jquery"
], function($) {
    "use strict";
    $(window).load(function() {
        $( ".selected" ).on('click', function() {
            if(document.documentElement.clientWidth < 767) {
                $(this).parent().find('.section').toggle(300);
                $(this).find('.statement').toggleClass('active');
            }
        });
    });
});
