/**
 * @ngdoc service
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
        var _self = this;

        // A call to an API endpoint could be done here to retrieve the deck payload

        // Mocking the deck payload assuming no joker cards exist
        _self.cardsArrayResponse = [
            new CardInterface('black', 'clubs Ace', 'C', 14),
            new CardInterface('black', 'clubs 2', 'C', 2),
            new CardInterface('black', 'clubs 3', 'C', 3),
            new CardInterface('black', 'clubs 4', 'C', 4),
            new CardInterface('black', 'clubs 5', 'C', 5),
            new CardInterface('black', 'clubs 6', 'C', 6),
            new CardInterface('black', 'clubs 7', 'C', 7),
            new CardInterface('black', 'clubs 8', 'C', 8),
            new CardInterface('black', 'clubs 9', 'C', 9),
            new CardInterface('black', 'clubs 10', 'C', 10),
            new CardInterface('black', 'clubs J', 'C', 11),
            new CardInterface('black', 'clubs Q', 'C', 12),
            new CardInterface('black', 'clubs K', 'C', 13),
            new CardInterface('black', 'hearts Ace', 'H', 14),
            new CardInterface('black', 'hearts 2', 'H', 2),
            new CardInterface('black', 'hearts 3', 'H', 3),
            new CardInterface('black', 'hearts 4', 'H', 4),
            new CardInterface('black', 'hearts 5', 'H', 5),
            new CardInterface('black', 'hearts 6', 'H', 6),
            new CardInterface('black', 'hearts 7', 'H', 7),
            new CardInterface('black', 'hearts 8', 'H', 8),
            new CardInterface('black', 'hearts 9', 'H', 9),
            new CardInterface('black', 'hearts 10', 'H', 10),
            new CardInterface('black', 'hearts J', 'H', 11),
            new CardInterface('black', 'hearts Q', 'H', 12),
            new CardInterface('black', 'hearts K', 'H', 13),
            new CardInterface('black', 'spades Ace', 'S', 14),
            new CardInterface('black', 'spades 2', 'S', 2),
            new CardInterface('black', 'spades 3', 'S', 3),
            new CardInterface('black', 'spades 4', 'S', 4),
            new CardInterface('black', 'spades 5', 'S', 5),
            new CardInterface('black', 'spades 6', 'S', 6),
            new CardInterface('black', 'spades 7', 'S', 7),
            new CardInterface('black', 'spades 8', 'S', 8),
            new CardInterface('black', 'spades 9', 'S', 9),
            new CardInterface('black', 'spades 10', 'S', 10),
            new CardInterface('black', 'spades J', 'S', 11),
            new CardInterface('black', 'spades Q', 'S', 12),
            new CardInterface('black', 'spades K', 'S', 13),
            new CardInterface('black', 'diamonds Ace', 'D', 14),
            new CardInterface('black', 'diamonds 2', 'D', 2),
            new CardInterface('black', 'diamonds 3', 'D', 3),
            new CardInterface('black', 'diamonds 4', 'D', 4),
            new CardInterface('black', 'diamonds 5', 'D', 5),
            new CardInterface('black', 'diamonds 6', 'D', 6),
            new CardInterface('black', 'diamonds 7', 'D', 7),
            new CardInterface('black', 'diamonds 8', 'D', 8),
            new CardInterface('black', 'diamonds 9', 'D', 9),
            new CardInterface('black', 'diamonds 10', 'D', 10),
            new CardInterface('black', 'diamonds J', 'D', 11),
            new CardInterface('black', 'diamonds Q', 'D', 12),
            new CardInterface('black', 'diamonds K', 'D', 13),
            new CardInterface('red', 'clubs Ace', 'C', 14),
            new CardInterface('red', 'clubs 2', 'C', 2),
            new CardInterface('red', 'clubs 3', 'C', 3),
            new CardInterface('red', 'clubs 4', 'C', 4),
            new CardInterface('red', 'clubs 5', 'C', 5),
            new CardInterface('red', 'clubs 6', 'C', 6),
            new CardInterface('red', 'clubs 7', 'C', 7),
            new CardInterface('red', 'clubs 8', 'C', 8),
            new CardInterface('red', 'clubs 9', 'C', 9),
            new CardInterface('red', 'clubs 10', 'C', 10),
            new CardInterface('red', 'clubs J', 'C', 11),
            new CardInterface('red', 'clubs Q', 'C', 12),
            new CardInterface('red', 'clubs K', 'C', 13),
            new CardInterface('red', 'hearts Ace', 'H', 14),
            new CardInterface('red', 'hearts 2', 'H', 2),
            new CardInterface('red', 'hearts 3', 'H', 3),
            new CardInterface('red', 'hearts 4', 'H', 4),
            new CardInterface('red', 'hearts 5', 'H', 5),
            new CardInterface('red', 'hearts 6', 'H', 6),
            new CardInterface('red', 'hearts 7', 'H', 7),
            new CardInterface('red', 'hearts 8', 'H', 8),
            new CardInterface('red', 'hearts 9', 'H', 9),
            new CardInterface('red', 'hearts 10', 'H', 10),
            new CardInterface('red', 'hearts J', 'H', 11),
            new CardInterface('red', 'hearts Q', 'H', 12),
            new CardInterface('red', 'hearts K', 'H', 13),
            new CardInterface('red', 'spades Ace', 'S', 14),
            new CardInterface('red', 'spades 2', 'S', 2),
            new CardInterface('red', 'spades 3', 'S', 3),
            new CardInterface('red', 'spades 4', 'S', 4),
            new CardInterface('red', 'spades 5', 'S', 5),
            new CardInterface('red', 'spades 6', 'S', 6),
            new CardInterface('red', 'spades 7', 'S', 7),
            new CardInterface('red', 'spades 8', 'S', 8),
            new CardInterface('red', 'spades 9', 'S', 9),
            new CardInterface('red', 'spades 10', 'S', 10),
            new CardInterface('red', 'spades J', 'S', 11),
            new CardInterface('red', 'spades Q', 'S', 12),
            new CardInterface('red', 'spades K', 'S', 13),
            new CardInterface('red', 'diamonds Ace', 'D', 14),
            new CardInterface('red', 'diamonds 2', 'D', 2),
            new CardInterface('red', 'diamonds 3', 'D', 3),
            new CardInterface('red', 'diamonds 4', 'D', 4),
            new CardInterface('red', 'diamonds 5', 'D', 5),
            new CardInterface('red', 'diamonds 6', 'D', 6),
            new CardInterface('red', 'diamonds 7', 'D', 7),
            new CardInterface('red', 'diamonds 8', 'D', 8),
            new CardInterface('red', 'diamonds 9', 'D', 9),
            new CardInterface('red', 'diamonds 10', 'D', 10),
            new CardInterface('red', 'diamonds J', 'D', 11),
            new CardInterface('red', 'diamonds Q', 'D', 12),
            new CardInterface('red', 'diamonds K', 'D', 13)
        ];

        _self._getDeck = function () {
            return new DeckInterface(_self.cardsArrayResponse);
        };

        return {
            getDeck: function () {
                return _self._getDeck();
            }
        };
    }

})();
