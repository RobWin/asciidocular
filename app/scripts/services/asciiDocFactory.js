'use strict';

angular.module('asciidocularApp')
  .factory('asciiDocFactory', function() {
    var options = Opal.hash2(
      ['safe', 'base_dir', 'backend'],
      {'safe': 'unsafe', 'base_dir': 'docs', 'backend': 'html5'});
    return {
      load: function(data) {
        return Opal.Asciidoctor.$load(data, options);
      }
    };
  });
