'use strict';

angular.module('asciidocularApp')
  .controller('SectionCtrl', function ($scope, $stateParams , _) {
    $scope.selectedSectionId = $stateParams.sectionId;
    $scope.selectedSubSectionId = $stateParams.subSectionId;
    //$log.debug($scope.selectedSectionId + " " + $scope.selectedSubSectionId);

    var selectedSection = _.find($scope.sections, function(section){
      //$log.debug("SectionId:" + section.$id());
      return section.$id() === $scope.selectedSectionId;
    });
    //$log.debug(selectedSection);
    $scope.selectedSectionTitle = selectedSection.$title();

    var selectedSubSection = _.find(selectedSection.$sections(), function(subSection){
      //$log.debug("SubSectionId:" + subSection.$id());
      return subSection.$id() === $scope.selectedSubSectionId;
    });
    $scope.selectedSubSectionTitle = selectedSubSection.$title();
    //$log.debug(selectedSubSection);
    $scope.convertedSection = selectedSubSection.$content();
  });
