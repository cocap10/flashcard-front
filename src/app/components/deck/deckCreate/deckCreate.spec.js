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
  beforeEach(() => {
    angular
      .module('deckCreate', ['ui.router', 'toastr'])
      .service('deckService', deckServiceMock)
      .constant('toastr', toastr)
      .component('deckCreate', deckCreate);
    angular.mock.module('deckCreate');
  });

  it('should create a deck', angular.mock.inject(($componentController, $rootScope, deckService) => {
    const component = $componentController('deckCreate', null, {});
    spyOn(deckService, 'create').and.callThrough();
    $rootScope.$digest();
    component.deck = {
      name: 'test'
    };
    component.submit();
    expect(component.submitted).toBe(true);
    expect(deckService.create).toHaveBeenCalled();
  }));
});
