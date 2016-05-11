/**
 * @ngdoc filter
 * @name app.filter:SortCardsFilter
 *
 * @description
 * A filter that sorts the order of card objects within a json array or cards
 *
 */
(function() {

    'use strict';

    angular.module('app').filter('SortCardsFilter', SortCardsFilter);

    SortCardsFilter.$inject = ['$filter'];

    function SortCardsFilter($filter) {
        var _self = this;

        _self.compareCards = function(a, b){
            if (a.cardvalue < b.cardvalue){
                return -1;
            }
            else if (a.cardvalue > b.cardvalue){
                return 1;
            }
            else {
                return 0;
            }
        };

        return function(sourceArray) {
            var clubs = [];
            var hearts = [];
            var diamonds = [];
            var spades = [];

            // Separate the cards into suits
            for (var i = 0; i < sourceArray.length; i++) {
                switch(sourceArray[i].suit) {
                    case 'C':
                        clubs.push(sourceArray[i]);
                        break;
                    case 'H':
                        hearts.push(sourceArray[i]);
                        break;
                    case 'D':
                        diamonds.push(sourceArray[i]);
                        break;
                    case 'S':
                        spades.push(sourceArray[i]);
                        break;
                }
            }

            // Sort the cards by card value for each suit
            clubs.sort(_self.compareCards);
            hearts.sort(_self.compareCards);
            diamonds.sort(_self.compareCards);
            spades.sort(_self.compareCards);

            // Merge the suits into a sorted card draw
            return clubs.concat(spades, hearts, diamonds);
        };
    }

})();

