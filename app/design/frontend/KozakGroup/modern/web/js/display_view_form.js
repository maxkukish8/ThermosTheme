require([
    "jquery"
], function($) {
    "use strict";

    $(document).ready(function() {
        $(".button-review-add, .action.add").click(function() {
            $('#review-content-form').slideToggle()(600);
        });
    });

});
