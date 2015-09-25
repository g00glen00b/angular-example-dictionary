(function(angular) {
  'use strict';

  angular.module('dictionaryApp.services', ['ngResource']);
  angular.module('dictionaryApp.feature.browse', ['dictionaryApp.services']);
  angular.module('dictionaryApp', [
    /** Core */
    'dictionaryApp.services',
    /** Features */
    'dictionaryApp.feature.browse'
  ]);
}(angular));
