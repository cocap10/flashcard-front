import angular from 'angular';
import 'angular-ui-router';
import 'angular-mocks';
import 'jquery';
import 'angular-animate';
import 'angular-toastr';
import * as toastr from "toastr";
import {deckCreate} from './deckCreate';
import deckServiceMock from "../../../services/deck/deckService.mock";

describe('DeckCreate component', () => {
  let component;
  beforeEach(() => {
    angular
      .module('deckCreate', ['ui.router', 'toastr'])
      .service('deckService', deckServiceMock)
      .constant('toastr', toastr)
      .component('deckCreate', deckCreate);
    angular.mock.module('deckCreate');
    angular.mock.inject(($componentController, $rootScope, deckService, $timeout, $state) => {
      component = $componentController('deckCreate', null, {});
      spyOn($state, 'go').and.callFake(() => {});
      spyOn(deckService, 'create').and.callThrough();
      $rootScope.$digest();
    });
  });

  it('should create a deck', angular.mock.inject((deckService, $timeout) => {
    component.deck = {
      name: 'test'
    };
    component.submit();
    expect(component.submitted).toBe(true);
    expect(deckService.create).toHaveBeenCalled();
    $timeout.flush();
  }));

  it('should change state', angular.mock.inject($state => {
    component.goToMainPage();
    expect($state.go).toHaveBeenCalled();
  }));
});
