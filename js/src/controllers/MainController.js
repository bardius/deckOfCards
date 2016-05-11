/**
 * @ngdoc controller
 * @name app.controller:MainController
 *
 * @description
 * The controller that handles the logic of the application
 *
 */
(function() {

    'use strict';

    angular.module('app').controller('MainController', MainController);

    MainController.$inject = ['$scope', '$filter', 'DeckDataService'];

    function MainController($scope, $filter, DeckDataService) {
        var _self = this;

        // Getting the deck payload and cache it as variable to avoid multiple requests for deck reset
        _self.fullDeck = DeckDataService.getDeck();

        _self.resetTable = function(){
            // Getting the deck array as value to allow independent manipulation
            $scope.deck = _self.fullDeck.slice(0);

            // Initialising the total cards to draw
            $scope.cardscount = 1;

            // Declaring the draw variable
            $scope.draw = null;

            // Setting the welcome message notification
            $scope.notification = 'Welcome. ' + $scope.deck.length + ' cards exist in deck';
        };

        // Initialising the table for the deck
        _self.resetTable();

        // Listening for any reset table events
        $scope.$on('resetTable', function() {
            _self.resetTable();

            $scope.notification = 'Table is reset. ' + $scope.deck.length + ' cards exist in deck';
        });

        // Listening for any shuffle Deck events
        $scope.$on('shuffleDeck', function() {
            var deckToShuffle = $scope.deck;
            $scope.deck = $filter('ShuffleDeckFilter')(deckToShuffle.slice(0));

            $scope.notification = 'Deck is shuffled. ' + $scope.deck.length + ' cards exist in deck';
        });

        // Listening for any draw Hand events
        $scope.$on('drawHand', function() {
            var currentDeck = $scope.deck;
            var drawnCards = [];
            var totalCardsToDraw = $scope.cardscount;

            for(totalCardsToDraw; totalCardsToDraw > 0; totalCardsToDraw -= 1){
                drawnCards.push(currentDeck.shift());
            }

            // Assign the new deck and draw arrays as values
            $scope.deck = currentDeck.slice(0);
            $scope.draw = drawnCards.slice(0);

            $scope.notification = $scope.draw.length + ' cards where drawn from the deck. ' + $scope.deck.length + ' cards remain in deck';
        });

        // Listening for any sort draw events
        $scope.$on('sortDraw', function() {
            var drawnCards = $scope.draw;

            // Sort the drawn cards if more than one cards were drawn
            if(drawnCards !== null && drawnCards.length > 1){
                $scope.draw = $filter('SortCardsFilter')(drawnCards.slice(0));
            }

            $scope.notification = $scope.draw.length + ' cards where sorted in the draw hand.';
        });
    }
})();
