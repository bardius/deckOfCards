/**
 * @ngdoc directive
 * @name app.directive:ngDeckWidget
 * @element div
 * @function
 *
 * @description
 * A visualization of the cards deck
 *
 * @example
 <example module="app">
     <file name="index.html">
         <div deck="array" ng-deck-widget></div>
     </file>
 </example>
 */

(function() {

    'use strict';

    angular.module('app').directive('ngDeckWidget', ngDeckWidget);

    function ngDeckWidget() {

        // Definition of directive
        var directiveDefinitionObject = {
            restirct: 'E',
            transclude: true,
            scope: {
                deck: '='
            },
            templateUrl: 'views/templates/deck-widget.tpl.html',
            link: function(scope, element) {
                scope.$watch('deck', function(deck) {
                });
            }
        };

        return directiveDefinitionObject;
    }

})();
