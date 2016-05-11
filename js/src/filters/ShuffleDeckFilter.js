/**
 * @ngdoc filter
 * @name app.filter:ShuffleDeckFilter
 *
 * @description
 * A filter that shuffles the order of objects within a json array
 *
 */
(function() {

    'use strict';

    angular.module('app').filter('ShuffleDeckFilter', ShuffleDeckFilter);

    ShuffleDeckFilter.$inject = ['$filter'];

    function ShuffleDeckFilter($filter) {
        return function(sourceArray) {
            // Fisher-Yates-Durstenfeld shuffle algorithm
            for (var i = 0; i < sourceArray.length - 1; i++) {
                var j = i + Math.floor(Math.random() * (sourceArray.length - i));

                var temp = sourceArray[j];
                sourceArray[j] = sourceArray[i];
                sourceArray[i] = temp;
            }

            return sourceArray;
        };
    }

})();

