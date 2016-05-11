/**
 * @ngdoc interface
 * @name app.models:CardInterface
 *
 * @description
 * Card factory to create card objects
 *
 */
(function () {

    'use strict';

    angular.module('app').factory('CardInterface', CardInterface);

    // Card Object interface
    function CardInterface() {
        var _self = this;
        _self.cardObject = {};

        return {
            setCard: function (name, suit, cardvalue) {
                _self.cardObject = {
                    name: name,
                    suit: suit,
                    cardvalue: cardvalue
                };

                return _self.cardObject;
            }
        };
    }

})();
