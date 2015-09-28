'use strict';

angular.module('asciidocularApp')
  .controller('MainCtrl', function ($scope, asciiDocLoader) {
    asciiDocLoader.load()
      .success(function(data) {
        var options = Opal.hash2(
          ['safe', 'base_dir', 'backend'],
          {'safe': 'unsafe', 'base_dir': 'docs', 'backend': 'html5'});

        $scope.adocument = Opal.Asciidoctor.$load(data, options);

        //$scope.preamble = $scope.adocument.$find_by({ context: 'preamble' })
      });
  });
