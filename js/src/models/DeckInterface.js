/**
 * @ngdoc interface
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
        var _self = this;
        _self.deckObject = {};

        return {
            setDeck: function (cardsArray) {
                _self.deckObject = cardsArray.slice(0);
                return _self.deckObject;
            }
        };
    }

})();
