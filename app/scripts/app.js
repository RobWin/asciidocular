'use strict';

angular
  .module('asciidocularApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .when('/documentation/:sectionId/:subSectionId', {
        templateUrl: 'views/documentation.html',
        controller: 'SectionCtrl',
        controllerAs: 'sectionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
