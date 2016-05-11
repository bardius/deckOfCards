/**
 * @ngdoc interface
 * @name app.services:DeckDataService
 *
 * @description
 * Deck factory. You can fetch here the deck from an API and the use it in controller
 *
 */
(function () {

    'use strict';

    angular.module('app').factory('DeckDataService', DeckDataService);

    DeckDataService.$inject = ['$http', 'CardInterface', 'DeckInterface'];

    function DeckDataService($http, CardInterface, DeckInterface) {

        // A call to an API endpoint could be done here to retrieve the deck payload

        // Mocking the deck payload assuming no jokers exist
        var cardsArrayResponse = [
            CardInterface.setCard('clubs Ace', 'C', 1),
            CardInterface.setCard('clubs 2', 'C', 2),
            CardInterface.setCard('clubs 3', 'C', 3),
            CardInterface.setCard('clubs 4', 'C', 4),
            CardInterface.setCard('clubs 5', 'C', 5),
            CardInterface.setCard('clubs 6', 'C', 6),
            CardInterface.setCard('clubs 7', 'C', 7),
            CardInterface.setCard('clubs 8', 'C', 8),
            CardInterface.setCard('clubs 9', 'C', 9),
            CardInterface.setCard('clubs 10', 'C', 10),
            CardInterface.setCard('clubs J', 'C', 11),
            CardInterface.setCard('clubs Q', 'C', 12),
            CardInterface.setCard('clubs K', 'C', 13),
            CardInterface.setCard('hearts Ace', 'H', 1),
            CardInterface.setCard('hearts 2', 'H', 2),
            CardInterface.setCard('hearts 3', 'H', 3),
            CardInterface.setCard('hearts 4', 'H', 4),
            CardInterface.setCard('hearts 5', 'H', 5),
            CardInterface.setCard('hearts 6', 'H', 6),
            CardInterface.setCard('hearts 7', 'H', 7),
            CardInterface.setCard('hearts 8', 'H', 8),
            CardInterface.setCard('hearts 9', 'H', 9),
            CardInterface.setCard('hearts 10', 'H', 10),
            CardInterface.setCard('hearts J', 'H', 11),
            CardInterface.setCard('hearts Q', 'H', 12),
            CardInterface.setCard('hearts K', 'H', 13),
            CardInterface.setCard('spades Ace', 'S', 1),
            CardInterface.setCard('spades 2', 'S', 2),
            CardInterface.setCard('spades 3', 'S', 3),
            CardInterface.setCard('spades 4', 'S', 4),
            CardInterface.setCard('spades 5', 'S', 5),
            CardInterface.setCard('spades 6', 'S', 6),
            CardInterface.setCard('spades 7', 'S', 7),
            CardInterface.setCard('spades 8', 'S', 8),
            CardInterface.setCard('spades 9', 'S', 9),
            CardInterface.setCard('spades 10', 'S', 10),
            CardInterface.setCard('spades J', 'S', 11),
            CardInterface.setCard('spades Q', 'S', 12),
            CardInterface.setCard('spades K', 'S', 13),
            CardInterface.setCard('diamonds Ace', 'D', 1),
            CardInterface.setCard('diamonds 2', 'D', 2),
            CardInterface.setCard('diamonds 3', 'D', 3),
            CardInterface.setCard('diamonds 4', 'D', 4),
            CardInterface.setCard('diamonds 5', 'D', 5),
            CardInterface.setCard('diamonds 6', 'D', 6),
            CardInterface.setCard('diamonds 7', 'D', 7),
            CardInterface.setCard('diamonds 8', 'D', 8),
            CardInterface.setCard('diamonds 9', 'D', 9),
            CardInterface.setCard('diamonds 10', 'D', 10),
            CardInterface.setCard('diamonds J', 'D', 11),
            CardInterface.setCard('diamonds Q', 'D', 12),
            CardInterface.setCard('diamonds K', 'D', 13)
        ];

        return {
            getDeck: function () {
                return DeckInterface.setDeck(cardsArrayResponse);
            }
        };
    }

})();
