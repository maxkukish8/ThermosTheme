var config = {
    config: {
        mixins: {
            'mage/menu': {
                'js/menu-custom': true
            }
        }
    },
    map: {
        '*': {
            qtyBlock: 'js/qty-block',
            showForm: 'js/display_view_form',
            slider: 'js/carousel/slick.min',
            anchor: 'js/anchor'
        }
    },
    deps: [
        'js/footer',
        'js/main'
    ]
};
