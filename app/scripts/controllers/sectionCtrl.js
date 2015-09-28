'use strict';

angular.module('asciidocularApp')
  .controller('SectionCtrl', function ($scope, $routeParams, $log) {
    var sectionId = $routeParams['sectionId'];
    var subSectionId = $routeParams['subSectionId'];
    //$log.debug(sectionId + " " + subSectionId);

    var selectedSection = _.find($scope.adocument.$sections(), function(section){
      //$log.debug("SectionId:" + section.$id());
      return section.$id() == sectionId;
    });
    //$log.debug(selectedSection);

    var selectedSubSection = _.find(selectedSection.$sections(), function(subSection){
      //$log.debug("SubSectionId:" + subSection.$id());
      return subSection.$id() == subSectionId;
    });
    //$log.debug(selectedSubSection);
    $scope.convertedSection = selectedSubSection.$convert();
  });
