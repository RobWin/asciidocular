'use strict';

angular
  .module('asciidocularApp', [
    'ngAnimate',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-loading-bar',
    'ncy-angular-breadcrumb'
  ])
  .constant('asciiDocFilePath', 'docs/index.adoc')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'views/main.html',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('section', {
        url: "/:sectionId/:subSectionId",
        templateUrl: 'views/documentation.html',
        controller: 'SectionCtrl',
        controllerAs: 'sectionCtrl',
        ncyBreadcrumb: {
          label: '{{selectedSectionTitle}} / {{selectedSubSectionTitle}}'
        }
      });
    $urlRouterProvider.otherwise('/');
  }).config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'home'
    });
  });
