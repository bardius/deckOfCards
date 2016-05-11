/**
 * @ngdoc directive
 * @name app.directive:ngNotificationWidget
 * @element div
 * @function
 *
 * @description
 * A notification message
 *
 * @example
 <example module="app">
     <file name="index.html">
         <div notification="text" ng-notification-widget></div>
     </file>
 </example>
 */

(function() {

    'use strict';

    angular.module('app').directive('ngNotificationWidget', ngNotificationWidget);

    function ngNotificationWidget() {

        // Definition of directive
        var directiveDefinitionObject = {
            restirct: 'E',
            transclude: true,
            scope: {
                notification: '='
            },
            templateUrl: 'views/templates/notification-widget.tpl.html',
            link: function(scope, element) {
            }
        };

        return directiveDefinitionObject;
    }

})();
