'use strict';

angular.module('asciidocularApp')
  .controller('MainCtrl', function ($scope, asciiDocLoader, $log) {
    asciiDocLoader.load()
      .success(function(data) {
        var options = Opal.hash2(
          ['safe', 'base_dir', 'backend'],
          {'safe': 'unsafe', 'base_dir': 'docs', 'backend': 'html5'});

        $scope.adocument = Opal.Asciidoctor.$load(data, options);

        var preamble = _.find($scope.adocument.$blocks(), function(block){
          return block.$context() == 'preamble'
        });
        $scope.convertedPreamble = preamble.$convert();

      });
  });
