import angular from 'angular';
import 'angular-ui-router';
import 'angular-mocks';
import 'jquery';
import 'angular-animate';
import 'angular-toastr';
import * as toastr from "toastr";
import {cardEdit} from './cardEdit';
import cardServiceMock from "../../../services/card/cardService.mock";
import deckServiceMock from "../../../services/deck/deckService.mock";

describe('CardEdit component', () => {
  let component;
  beforeEach(() => {
    angular
      .module('cardEdit', ['ui.router', 'toastr'])
      .service('cardService', cardServiceMock)
      .service('deckService', deckServiceMock)
      .constant('toastr', toastr)
      .component('cardEdit', cardEdit);
    angular.mock.module('cardEdit');
    angular.mock.inject(($componentController, $rootScope) => {
      component = $componentController('cardEdit', null, {});
      $rootScope.$digest();
    });
  });

  it('should load card', angular.mock.inject((cardService, deckService, $timeout) => {
    spyOn(cardService, 'get').and.callThrough();
    spyOn(deckService, 'getAll').and.callThrough();
    component.$stateParams.deckId = 1;
    component.$onInit();
    expect(cardService.get).toHaveBeenCalled();
    expect(deckService.getAll).toHaveBeenCalled();
    $timeout.flush();
    expect(component.decks).toBeDefined();
    expect(component.card).toBeDefined();
    expect(component.deckId).toBeDefined();
    expect(component.deckId).toEqual(1);
  }));

  it('should save card', angular.mock.inject((cardService, $timeout) => {
    spyOn(cardService, 'save').and.callThrough();
    component.card = {};
    component.deckId = 1;
    component.submit();
    expect(cardService.save).toHaveBeenCalledWith(component.card);
    expect(component.submitted).toBe(true);
    $timeout.flush();
    expect(component.submitted).toBe(false);
  }));
});
