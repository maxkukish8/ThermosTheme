define([
    'jquery',
], function ($) {
    'use strict';

    $.widget('interglobal.qtyBlock', {
        options: {
            btnConsTemplate: '<button class="qty-block__btn qty-block__btn--cons" type="button">–</button>',
            btnProsTemplate: '<button class="qty-block__btn qty-block__btn--pros" type="button">+</button>',
            qtyInput: '.qty-block__input',
            activeClass: '_qty-block'
        },

        /** @inheritdoc */

        _create: function () {
            this._addButtons();
            this._bindClick();
        },

        /**
         * Add controls to element
         *
         * @private
         */

        _addButtons: function () {
            var self = this;
            var elem = self.element;
            var qtyInput = elem.find(this.options.qtyInput);

            // init class
            elem.addClass(self.options.activeClass);

            qtyInput.before(this.options.btnConsTemplate);
            qtyInput.after(this.options.btnProsTemplate);
        },

        /**
         * Click handler for each btn
         *
         * @private
         */

        _bindClick: function () {
            var self = this;

            var cons = self.element.find('.qty-block__btn--cons');
            var pros = self.element.find('.qty-block__btn--pros');

            cons.on({
                'click': self.cons.bind(this)
            });

            pros.on({
                'click': self.pros.bind(this)
            });
        },

        cons: function (e) {
            var qtyInput = $(e.currentTarget).parent().find(this.options.qtyInput)
            var qtyValue = Math.ceil(qtyInput.val());


            if (qtyValue > 1) {
                qtyValue--;
            } else {
                qtyValue = 1;
                $(e.currentTarget).attr('disabled', true);
            }

            // set new value and add trigger
            qtyInput.val(qtyValue).trigger('change');
        },

        pros: function (e) {
            var qtyInput = $(e.currentTarget).parent().find(this.options.qtyInput);
            var qtyValue = Math.ceil(qtyInput.val());
            var consBtn = $(e.currentTarget).parent().find('.qty-block__btn--cons').attr('disabled', true)

            consBtn.attr('disabled', false);
            qtyValue++;

            // set new value and add trigger
            qtyInput.val(qtyValue).trigger('change');
        }
    });

    return $.interglobal.qtyBlock;
});
