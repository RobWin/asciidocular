'use strict';

angular.module('asciidocularApp')
  .factory('asciiDocLoader', function ($http) {
   return {
      load: function() {
        return $http.get('docs/index.adoc');
      }
    }
  });
