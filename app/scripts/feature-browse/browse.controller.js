(function(angular) {
  'use strict';

  function BrowseController(Dictionary) {
    var vm = this;
    vm.definitions = [];
    vm.search = search;

    ////////

    function search(word) {
      vm.definitions = Dictionary.find({
        word: word
      });
    }
  }

  BrowseController.$inject = ['Dictionary'];

  angular
    .module('dictionaryApp.feature.browse')
    .controller('BrowseController', BrowseController);
}(angular));
