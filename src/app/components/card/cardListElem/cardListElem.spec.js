import angular from 'angular';
import 'angular-mocks';
import {cardListElem} from './cardListElem';
import cardServiceMock from "../../../services/card/cardService.mock";

describe('cardListElem component', () => {
  let component;
  beforeEach(() => {
    angular
      .module('Card', [])
      .service('cardService', cardServiceMock)
      .component('cardListElem', cardListElem);
    angular.mock.module('Card');
    angular.mock.inject($componentController => {
      component = $componentController('cardListElem', null,
        {
          card: {
            question: 'question0'
          },
          index: 1,
          deckId: 0
        });
    });
  });

  it('should have a card in the deck id 0', () => {
    expect(component.card.question).toEqual('question0');
    expect(component.index).toEqual(1);
  });

  it('should call service to delete card', angular.mock.inject((cardService, $timeout) => {
    component.deleteElem = () => {};
    spyOn(component, 'deleteElem').and.callThrough();
    spyOn(cardService, 'delete').and.callThrough();
    component.delete(1);
    $timeout.flush();
    expect(cardService.delete).toHaveBeenCalled();
  }));
});
