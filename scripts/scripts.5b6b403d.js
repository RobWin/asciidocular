"use strict";angular.module("asciidocularApp",["ngAnimate","ui.router","ngSanitize","ngTouch","ui.bootstrap","angular-loading-bar","ncy-angular-breadcrumb"]).constant("asciiDocFilePath","docs/index.adoc").config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("home",{url:"/",templateUrl:"views/main.html",ncyBreadcrumb:{label:"Home"}}).state("section",{url:"/:sectionId/:subSectionId",templateUrl:"views/documentation.html",controller:"SectionCtrl",controllerAs:"sectionCtrl",ncyBreadcrumb:{label:"{{selectedSectionTitle}} / {{selectedSubSectionTitle}}"}}),b.otherwise("/")}]).config(["$breadcrumbProvider",function(a){a.setOptions({prefixStateName:"home"})}]).run(["$rootScope","asciiDocLoader","asciiDocFactory","_","$log",function(a,b,c,d,e){b.load().success(function(b){var e=c.load(b),f=d.find(e.$blocks(),function(a){return"preamble"===a.$context()});a.docTitle=e.$doctitle(),a.convertedPreamble=f.$convert(),a.sections=e.$sections()})}]),angular.module("asciidocularApp").controller("SectionCtrl",["$scope","$stateParams","_","$log",function(a,b,c,d){a.selectedSectionId=b.sectionId,a.selectedSubSectionId=b.subSectionId;var e=c.find(a.sections,function(b){return b.$id()===a.selectedSectionId});a.selectedSectionTitle=e.$title();var f=c.find(e.$sections(),function(b){return b.$id()===a.selectedSubSectionId});a.selectedSubSectionTitle=f.$title(),a.convertedSection=f.$content(),angular.element(document).ready(function(){angular.forEach(angular.element(document.querySelector("pre code")),function(a){hljs.highlightBlock(a)})})}]),angular.module("asciidocularApp").factory("asciiDocLoader",["$http","asciiDocFilePath",function(a,b){return{load:function(){return a.get(b)}}}]),angular.module("asciidocularApp").factory("asciiDocFactory",function(){var a=Opal.hash2(["safe","base_dir","backend"],{safe:"unsafe",base_dir:"docs",backend:"html5"});return{load:function(b){return Opal.Asciidoctor.$load(b,a)}}}),angular.module("asciidocularApp").factory("_",["$window",function(a){return a._}]),angular.module("asciidocularApp").run(["$templateCache",function(a){a.put("views/documentation.html",'<div ncy-breadcrumb></div> <div ng-bind-html="convertedSection"></div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>{{ docTitle }}</h1> <p class="lead"> <div ng-bind-html="convertedPreamble"></div> </p> </div>')}]);