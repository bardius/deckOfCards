module.exports.register = function (Handlebars, options) {
    'use strict';

    Handlebars.registerHelper('ifCond', function (v1, v2, options) {

        if (v2 === 'null') {
            v2 = null;
        }
        if (v1 === v2) {
            return options.fn(this);
        }

        return options.inverse(this);
    });
};
