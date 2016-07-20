import angular from 'angular';
import 'angular-mocks';
import {deckListElem} from './deckListElem';

describe('DeckListItem component', () => {
  beforeEach(() => {
    angular
      .module('Deck', [])
      .component('deckListElem', deckListElem);
    angular.mock.module('Deck');
  });

  it('should have a deck', () => {
    angular.mock.inject($componentController => {
      const component = $componentController('deckListElem', null, {deck: {name: 'test'}, index: 1});
      expect(component.deck.name).toEqual('test');
      expect(component.index).toEqual(1);
    });
  });
});
