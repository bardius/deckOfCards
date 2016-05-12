/**
 * @ngdoc service
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

        function Card(color, name, suit, cardvalue){
            this.color = color;
            this.name = name;
            this.suit = suit;
            this.cardvalue = cardvalue;
        }

        return Card;
    }

})();
