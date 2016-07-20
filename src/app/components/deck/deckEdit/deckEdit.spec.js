import angular from 'angular';
import 'angular-ui-router';
import 'angular-mocks';
import 'jquery';
import 'angular-animate';
import 'angular-toastr';
import * as toastr from "toastr";
import {deckEdit} from './deckEdit';
import deckServiceMock from "../../../services/deck/deckService.mock";

describe('DeckEdit component', () => {
  let component;
  beforeEach(() => {
    angular
      .module('deckEdit', ['ui.router', 'toastr'])
      .service('deckService', deckServiceMock)
      .constant('toastr', toastr)
      .component('deckEdit', deckEdit);
    angular.mock.module('deckEdit');
    angular.mock.inject(($componentController, $rootScope, deckService) => {
      spyOn(deckService, 'get').and.callThrough();
      component = $componentController('deckEdit', null, {});
      $rootScope.$digest();
    });
  });

  it('should load deck', angular.mock.inject(($componentController, $rootScope, deckService) => {
    expect(deckService.get).toHaveBeenCalled();
    expect(component.deck).toBeDefined();
  }));
  it('should save deck', angular.mock.inject(($componentController, $rootScope, deckService) => {
    spyOn(deckService, 'save').and.callThrough();
    component.submit();
    expect(deckService.save).toHaveBeenCalled();
  }));
  it('should trigger submitted flag', angular.mock.inject(() => {
    component.submit();
    expect(component.submitted).toBeDefined();
  }));
  it('should be true if deck has changed', angular.mock.inject(() => {
    expect(component.isDeckUntouched()).toBe(true);
    component.deck.name = 'toto';
    expect(component.isDeckUntouched()).toBe(false);
  }));
});
