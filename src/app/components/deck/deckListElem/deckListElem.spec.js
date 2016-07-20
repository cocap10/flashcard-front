import angular from 'angular';
import 'angular-mocks';
import {deckListElem} from './deckListElem';
import deckServiceMock from "../../../services/deck/deckService.mock";

describe('DeckListElem component', () => {
  let component;
  beforeEach(() => {
    angular
      .module('Deck', [])
      .service('deckService', deckServiceMock)
      .component('deckListElem', deckListElem);
    angular.mock.module('Deck');
    angular.mock.inject($componentController => {
      component = $componentController('deckListElem', null, {deck: {name: 'test'}, index: 1});
    });
  });

  it('should have a deck', () => {
    expect(component.deck.name).toEqual('test');
    expect(component.index).toEqual(1);
  });

  it('should call service to delete deck', angular.mock.inject(deckService => {
    spyOn(deckService, 'delete').and.callThrough();
    component.delete(1);
    expect(deckService.delete).toHaveBeenCalled();
  }));
});
