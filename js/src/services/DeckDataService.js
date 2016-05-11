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
            CardInterface.setCard('black', 'clubs Ace', 'C', 14),
            CardInterface.setCard('black', 'clubs 2', 'C', 2),
            CardInterface.setCard('black', 'clubs 3', 'C', 3),
            CardInterface.setCard('black', 'clubs 4', 'C', 4),
            CardInterface.setCard('black', 'clubs 5', 'C', 5),
            CardInterface.setCard('black', 'clubs 6', 'C', 6),
            CardInterface.setCard('black', 'clubs 7', 'C', 7),
            CardInterface.setCard('black', 'clubs 8', 'C', 8),
            CardInterface.setCard('black', 'clubs 9', 'C', 9),
            CardInterface.setCard('black', 'clubs 10', 'C', 10),
            CardInterface.setCard('black', 'clubs J', 'C', 11),
            CardInterface.setCard('black', 'clubs Q', 'C', 12),
            CardInterface.setCard('black', 'clubs K', 'C', 13),
            CardInterface.setCard('black', 'hearts Ace', 'H', 14),
            CardInterface.setCard('black', 'hearts 2', 'H', 2),
            CardInterface.setCard('black', 'hearts 3', 'H', 3),
            CardInterface.setCard('black', 'hearts 4', 'H', 4),
            CardInterface.setCard('black', 'hearts 5', 'H', 5),
            CardInterface.setCard('black', 'hearts 6', 'H', 6),
            CardInterface.setCard('black', 'hearts 7', 'H', 7),
            CardInterface.setCard('black', 'hearts 8', 'H', 8),
            CardInterface.setCard('black', 'hearts 9', 'H', 9),
            CardInterface.setCard('black', 'hearts 10', 'H', 10),
            CardInterface.setCard('black', 'hearts J', 'H', 11),
            CardInterface.setCard('black', 'hearts Q', 'H', 12),
            CardInterface.setCard('black', 'hearts K', 'H', 13),
            CardInterface.setCard('black', 'spades Ace', 'S', 14),
            CardInterface.setCard('black', 'spades 2', 'S', 2),
            CardInterface.setCard('black', 'spades 3', 'S', 3),
            CardInterface.setCard('black', 'spades 4', 'S', 4),
            CardInterface.setCard('black', 'spades 5', 'S', 5),
            CardInterface.setCard('black', 'spades 6', 'S', 6),
            CardInterface.setCard('black', 'spades 7', 'S', 7),
            CardInterface.setCard('black', 'spades 8', 'S', 8),
            CardInterface.setCard('black', 'spades 9', 'S', 9),
            CardInterface.setCard('black', 'spades 10', 'S', 10),
            CardInterface.setCard('black', 'spades J', 'S', 11),
            CardInterface.setCard('black', 'spades Q', 'S', 12),
            CardInterface.setCard('black', 'spades K', 'S', 13),
            CardInterface.setCard('black', 'diamonds Ace', 'D', 14),
            CardInterface.setCard('black', 'diamonds 2', 'D', 2),
            CardInterface.setCard('black', 'diamonds 3', 'D', 3),
            CardInterface.setCard('black', 'diamonds 4', 'D', 4),
            CardInterface.setCard('black', 'diamonds 5', 'D', 5),
            CardInterface.setCard('black', 'diamonds 6', 'D', 6),
            CardInterface.setCard('black', 'diamonds 7', 'D', 7),
            CardInterface.setCard('black', 'diamonds 8', 'D', 8),
            CardInterface.setCard('black', 'diamonds 9', 'D', 9),
            CardInterface.setCard('black', 'diamonds 10', 'D', 10),
            CardInterface.setCard('black', 'diamonds J', 'D', 11),
            CardInterface.setCard('black', 'diamonds Q', 'D', 12),
            CardInterface.setCard('black', 'diamonds K', 'D', 13),
            CardInterface.setCard('red', 'clubs Ace', 'C', 14),
            CardInterface.setCard('red', 'clubs 2', 'C', 2),
            CardInterface.setCard('red', 'clubs 3', 'C', 3),
            CardInterface.setCard('red', 'clubs 4', 'C', 4),
            CardInterface.setCard('red', 'clubs 5', 'C', 5),
            CardInterface.setCard('red', 'clubs 6', 'C', 6),
            CardInterface.setCard('red', 'clubs 7', 'C', 7),
            CardInterface.setCard('red', 'clubs 8', 'C', 8),
            CardInterface.setCard('red', 'clubs 9', 'C', 9),
            CardInterface.setCard('red', 'clubs 10', 'C', 10),
            CardInterface.setCard('red', 'clubs J', 'C', 11),
            CardInterface.setCard('red', 'clubs Q', 'C', 12),
            CardInterface.setCard('red', 'clubs K', 'C', 13),
            CardInterface.setCard('red', 'hearts Ace', 'H', 14),
            CardInterface.setCard('red', 'hearts 2', 'H', 2),
            CardInterface.setCard('red', 'hearts 3', 'H', 3),
            CardInterface.setCard('red', 'hearts 4', 'H', 4),
            CardInterface.setCard('red', 'hearts 5', 'H', 5),
            CardInterface.setCard('red', 'hearts 6', 'H', 6),
            CardInterface.setCard('red', 'hearts 7', 'H', 7),
            CardInterface.setCard('red', 'hearts 8', 'H', 8),
            CardInterface.setCard('red', 'hearts 9', 'H', 9),
            CardInterface.setCard('red', 'hearts 10', 'H', 10),
            CardInterface.setCard('red', 'hearts J', 'H', 11),
            CardInterface.setCard('red', 'hearts Q', 'H', 12),
            CardInterface.setCard('red', 'hearts K', 'H', 13),
            CardInterface.setCard('red', 'spades Ace', 'S', 14),
            CardInterface.setCard('red', 'spades 2', 'S', 2),
            CardInterface.setCard('red', 'spades 3', 'S', 3),
            CardInterface.setCard('red', 'spades 4', 'S', 4),
            CardInterface.setCard('red', 'spades 5', 'S', 5),
            CardInterface.setCard('red', 'spades 6', 'S', 6),
            CardInterface.setCard('red', 'spades 7', 'S', 7),
            CardInterface.setCard('red', 'spades 8', 'S', 8),
            CardInterface.setCard('red', 'spades 9', 'S', 9),
            CardInterface.setCard('red', 'spades 10', 'S', 10),
            CardInterface.setCard('red', 'spades J', 'S', 11),
            CardInterface.setCard('red', 'spades Q', 'S', 12),
            CardInterface.setCard('red', 'spades K', 'S', 13),
            CardInterface.setCard('red', 'diamonds Ace', 'D', 14),
            CardInterface.setCard('red', 'diamonds 2', 'D', 2),
            CardInterface.setCard('red', 'diamonds 3', 'D', 3),
            CardInterface.setCard('red', 'diamonds 4', 'D', 4),
            CardInterface.setCard('red', 'diamonds 5', 'D', 5),
            CardInterface.setCard('red', 'diamonds 6', 'D', 6),
            CardInterface.setCard('red', 'diamonds 7', 'D', 7),
            CardInterface.setCard('red', 'diamonds 8', 'D', 8),
            CardInterface.setCard('red', 'diamonds 9', 'D', 9),
            CardInterface.setCard('red', 'diamonds 10', 'D', 10),
            CardInterface.setCard('red', 'diamonds J', 'D', 11),
            CardInterface.setCard('red', 'diamonds Q', 'D', 12),
            CardInterface.setCard('red', 'diamonds K', 'D', 13)
        ];

        return {
            getDeck: function () {
                return DeckInterface.setDeck(cardsArrayResponse);
            }
        };
    }

})();
