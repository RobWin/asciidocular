'use strict';

angular.module('asciidocularApp')
  .factory('asciiDocLoader', function ($http, asciiDocFilePath) {
   return {
      load: function() {
        return $http.get(asciiDocFilePath);
      }
    };
  });
