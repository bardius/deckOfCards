/**
 * @ngdoc directive
 * @name app.directive:ngDrawHandWidget
 * @element div
 * @function
 *
 * @description
 * A visualization of the drawn hand cards
 *
 * @example
 <example module="app">
     <file name="index.html">
         <div draw="array" ng-draw-hand-widget></div>
     </file>
 </example>
 */

(function() {

    'use strict';

    angular.module('app').directive('ngDrawHandWidget', ngDrawHandWidget);

    function ngDrawHandWidget() {

        // Definition of directive
        var directiveDefinitionObject = {
            restirct: 'E',
            transclude: true,
            scope: {
                draw: '='
            },
            templateUrl: 'views/templates/draw-hand-widget.tpl.html',
            link: function(scope, element) {
            }
        };

        return directiveDefinitionObject;
    }

})();
