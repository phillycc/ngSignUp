'use strict';

var app = angular.module('signup', ['ngAnimate']);

app.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude class="brand-logo"></div>',
    }
})
