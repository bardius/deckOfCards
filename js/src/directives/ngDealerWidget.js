/**
 * @ngdoc directive
 * @name app.directive:ngDealerWidget
 * @element div
 * @function
 *
 * @description
 * Main navigation for the deck dealing functionality
 *
 * @example
 <example module="app">
     <file name="index.html">
         <div cardscount="integer" deck="array" draw="array" ng-dealer-widget></div>
     </file>
 </example>
 */

(function() {

    'use strict';

    angular.module('app').directive('ngDealerWidget', ngDealerWidget);

    ngDealerWidget.$inject = ['$rootScope'];

    function ngDealerWidget($rootScope) {

        // Definition of directive
        var directiveDefinitionObject = {
            restirct: 'E',
            transclude: true,
            scope: {
                cardscount: '=',
                deck: '=',
                draw: '='
            },
            templateUrl: 'views/templates/dealer-widget.tpl.html',
            link: function(scope, element) {

                scope.resetTable = function() {
                    $rootScope.$broadcast('resetTable');
                };

                scope.shuffleDeck = function() {
                    $rootScope.$broadcast('shuffleDeck');
                };

                scope.drawHand = function() {
                    $rootScope.$broadcast('drawHand');
                };

                scope.sortDraw = function() {
                    $rootScope.$broadcast('sortDraw');
                };
            }
        };

        return directiveDefinitionObject;
    }

})();
