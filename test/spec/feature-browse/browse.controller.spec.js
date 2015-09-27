(function() {
  'use strict';

  describe('Browse controller', function() {
    var DictionaryStub, vm;
    beforeEach(module('dictionaryApp'));

    beforeEach(inject(function($controller) {
      DictionaryStub = sinon.stub({
        find: function() { }
      });

      vm = $controller('BrowseController', {
        'Dictionary': DictionaryStub
      });
    }));

    describe('Searching', function() {
      it('uses the Dictionary service', function() {
        vm.search('word');
        expect(DictionaryStub.find.calledOnce).toBeTruthy();
      });

      it('sets definitions when searching', function() {
        var definition = {
          text: 'Meaning of the word',
          attribution: 'Source or author'
        };
        DictionaryStub.find.returns({ definitions: [definition] });
        vm.search('word');
        expect(vm.definitions.definitions).toContain(definition);
      });

      it('searches for the given word', function() {
        vm.search('word');
        expect(DictionaryStub.find.firstCall.args[0].word)
          .toEqual('word');
      });
    });
  });
}());
