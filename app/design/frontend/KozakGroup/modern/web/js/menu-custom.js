/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'matchMedia',
    'jquery-ui-modules/menu',
    'jquery/jquery.mobile.custom',
    'mage/translate'
], function ($) {

    return function (menu) {
        $.widget('mage.menu', $.mage.menu, {
            options: {
                responsive: false,
                expanded: false,
                showDelay: 42,
                hideDelay: 300,
                delay: 0,
                mediaBreakpoint: '(max-width: 1024px)'
            },
        });
        return $.mage.menu;
    };

});
