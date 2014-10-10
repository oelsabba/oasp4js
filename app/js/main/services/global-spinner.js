angular.module('app.main')
    .factory('globalSpinner', function ($rootScope) {
        'use strict';
        return {
            show: function () {
                $rootScope.globalSpinner = true;
            },
            hide: function () {
                $rootScope.globalSpinner = false;
            }
        };
    });