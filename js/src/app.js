/**
 *
 * Deck Of Cards
 * @description           Deck Of Cards Angular web application
 * @author                George Bardis
 * @url                   https://github.com/bardius
 * @version               1.0.0
 * @date                  May 2016
 * @license               MIT
 *
 */
(function () {
    'use strict';

    /**
     * Definition of the main app module and its dependencies
     */
    angular.module('app', [
        'ngRoute',
        'templates-app'
    ])
        .config(config)
        .run(run)
        .value('version', '1.0.0');

    // safe dependency injection, this prevents minification issues
    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];
    run.$inject = ['$rootScope', '$location'];

    /**
     * App routing
     */
    function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

        $locationProvider.html5Mode(false);

        // Setting app routes
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.tpl.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .when('/sample', {
                templateUrl: 'views/sample.tpl.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });

        // Disable debug info in production for performance improvement
        if(window.productionMode === true){
            $compileProvider.debugInfoEnabled(false);
        }
    }

    /**
     * Run block
     */
    function run($rootScope, $location) {
        // put here everything that you need to run on page load
    }

})();
