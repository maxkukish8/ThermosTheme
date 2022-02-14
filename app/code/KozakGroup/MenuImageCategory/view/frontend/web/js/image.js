require(
    [
        'jquery'
    ],
    function(
        $
    ) {
        $(document).ready(function() {
            $('.category_image img').each(function() {
                if($(this).attr('src') === '') {
                    $(this).parent().hide();
                }
            });
        });
    }
);
