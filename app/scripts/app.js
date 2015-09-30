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
  }).run(function($rootScope, asciiDocLoader, asciiDocFactory, _){
    asciiDocLoader.load()
      .success(function(data) {
        var asciiDoc = asciiDocFactory.load(data);
        var preamble = _.find(asciiDoc.$blocks(), function(block){
          return block.$context() === 'preamble';
        });
        $rootScope.docTitle = asciiDoc.$doctitle();
        $rootScope.convertedPreamble = preamble.$convert();
        $rootScope.sections = asciiDoc.$sections();
      });
  });
