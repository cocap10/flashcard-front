import angular from 'angular';
import 'angular-ui-router';
import 'angular-mocks';
import 'jquery';
import 'angular-animate';
import 'angular-toastr';
import * as toastr from "toastr";
import {deckList} from "./deckList";
import deckServiceMock from "../../../services/deck/deckService.mock";

describe('DeckList component', () => {
  let component;
  beforeEach(() => {
    angular
      .module('Deck', ['toastr'])
      .service('deckService', deckServiceMock)
      .constant('toastr', toastr)
      .component('deckList', deckList);
    angular.mock.module('Deck');
    angular.mock.inject(($componentController, $rootScope) => {
      component = $componentController('deckList', null, {});
      $rootScope.$digest();
    });
  });

  it('should contain a list of 3 decks', angular.mock.inject(() => {
    expect(component.decks.length).toEqual(3);
  }));

  it('should update deck list', angular.mock.inject(toastr => {
    spyOn(toastr, 'info').and.callThrough();
    component.deleteDeck(1);
    expect(component.decks.length).toEqual(2);
    expect(toastr.info).toHaveBeenCalled();
  }));
});

