/**
 * @ngdoc service
 * @name app.models:DeckInterface
 *
 * @description
 * Card factory to create deck objects
 *
 */
(function () {

    'use strict';

    angular.module('app').factory('DeckInterface', DeckInterface);

    // Deck Object interface
    function DeckInterface() {

        function Deck(cardsArray){
            return cardsArray.slice(0);
        }

        return Deck;
    }

})();
