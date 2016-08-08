import angular from 'angular';
import 'angular-ui-router';
import 'angular-mocks';
import 'jquery';
import 'angular-animate';
import 'angular-toastr';
import * as toastr from "toastr";
import {cardCreate} from './cardCreate';
import cardServiceMock from "../../../services/card/cardService.mock";
import deckServiceMock from "../../../services/deck/deckService.mock";

describe('CardCreate component', () => {
  let component;
  beforeEach(() => {
    angular
      .module('cardCreate', ['ui.router', 'toastr'])
      .service('cardService', cardServiceMock)
      .service('deckService', deckServiceMock)
      .constant('toastr', toastr)
      .component('cardCreate', cardCreate);
    angular.mock.module('cardCreate');
    angular.mock.inject(($componentController, $rootScope) => {
      component = $componentController('cardCreate', null, {});
      $rootScope.$digest();
    });
  });

  it('should init deckId and decks', angular.mock.inject((deckService, $timeout) => {
    spyOn(deckService, 'getAll').and.callThrough();
    component.$stateParams.deckId = 1;
    component.$onInit();
    expect(deckService.getAll).toHaveBeenCalled();
    $timeout.flush();
    expect(component.decks).toBeDefined();
    expect(component.deckId).toBeDefined();
    expect(component.deckId).toEqual(1);
  }));

  it('should create card', angular.mock.inject((cardService, $timeout) => {
    spyOn(cardService, 'create').and.callThrough();
    spyOn(component, 'goToDeckPage');
    component.card = {};
    component.deckId = 1;
    component.submit();
    component.card.deck = {id: component.deckId};
    expect(cardService.create).toHaveBeenCalledWith(component.card);
    expect(component.submitted).toBe(true);
    $timeout.flush();
    expect(component.submitted).toBe(false);
    expect(component.goToDeckPage).toHaveBeenCalled();
  }));

  it('should change state', angular.mock.inject($state => {
    spyOn($state, 'go');
    component.deckId = 1;
    component.goToDeckPage();
    expect($state.go).toHaveBeenCalledWith('deck', {id: 1});
  }));
});
