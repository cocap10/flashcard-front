import angular from 'angular';
import 'angular-mocks';
import {deckList} from "./deckList";
import deckListServiceMock from "./deckListServiceMock";

describe('DeckList component', () => {
  beforeEach(() => {
    angular
      .module('Deck', [])
      .service('deckListService', deckListServiceMock)
      .component('deckList', deckList);
    angular.mock.module('Deck');
  });

  it('should contain a list of 3 decks', angular.mock.inject(($componentController, $rootScope) => {
    const component = $componentController('deckList', null, {});
    $rootScope.$digest();
    expect(component.decks.length).toEqual(3);
  }));
});

