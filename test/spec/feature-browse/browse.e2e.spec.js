(function() {
  'use strict';

  describe('Browsing a dictionary', function() {
    beforeEach(function() {
      browser.get('http://localhost:9000');
    });

    it('should show the results for the given word', function() {
      element(by.model('vm.word')).sendKeys('filibuster');
      element(by.className('btn-primary')).click();
      expect(element.all(by.repeater('definition in vm.definitions.definitions')).count()).toEqual(6);
    });

    it('should show the meaning of the given word', function() {
      element(by.model('vm.word')).sendKeys('filibuster');
      element(by.className('btn-primary')).click();
      expect(element.all(by.repeater('definition in vm.definitions.definitions')).first().getText())
        .toContain('The use of obstructionist tactics, especially prolonged speechmaking, for the purpose of delaying legislative action.');
    });

    it('should show the source of the definition of the given word', function() {
      element(by.model('vm.word')).sendKeys('filibuster');
      element(by.className('btn-primary')).click();
      expect(element.all(by.tagName('footer')).first().getText())
        .toContain('from The American Heritage® Dictionary of the English Language, 4th Edition');
    });

    it('should show the amount of results in the title', function() {
      element(by.model('vm.word')).sendKeys('filibuster');
      element(by.className('btn-primary')).click();
      expect(element(by.tagName('h2')).getText()).toEqual('6 results found for "filibuster"');
    });

    it('should initially not show the title with the amount of results', function() {
      element(by.model('vm.word')).sendKeys('filibuster');
      expect(element(by.tagName('h2')).isDisplayed()).toBeFalsy();
    });

    it('should hide the results if a new word is entered', function() {
      element(by.model('vm.word')).sendKeys('filibuster');
      element(by.className('btn-primary')).click();
      expect(element(by.css('form + div')).isDisplayed()).toBeTruthy();
      element(by.model('vm.word')).sendKeys('something');
      expect(element(by.css('form + div')).isDisplayed()).toBeFalsy();
    });
  });
}());
