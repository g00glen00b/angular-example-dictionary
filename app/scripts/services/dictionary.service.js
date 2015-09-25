(function(angular) {
  'use strict';

  function Dictionary($resource, mashapeKey) {
    return $resource('https://montanaflynn-dictionary.p.mashape.com/define', null, {
      find: {
        method: 'GET',
        isArray: false,
        headers: {
          'X-Mashape-Authorization': mashapeKey
        }
      }
    });
  }

  Dictionary.$inject = ['$resource', 'mashapeKey'];

  angular
    .module('dictionaryApp.services')
    .factory('Dictionary', Dictionary);
}(angular));
