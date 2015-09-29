'use strict';

angular.module('asciidocularApp')
  .controller('MainCtrl', function ($scope, asciiDocLoader, asciiDocFactory, _) {
    asciiDocLoader.load()
      .success(function(data) {
        $scope.adocument = asciiDocFactory.load(data);
        var preamble = _.find($scope.adocument.$blocks(), function(block){
          return block.$context() === 'preamble';
        });
        $scope.convertedPreamble = preamble.$convert();
      });
  });
