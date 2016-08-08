import angular from 'angular';
import 'angular-ui-router';
import 'angular-mocks';
import 'jquery';
import 'angular-animate';
import 'angular-toastr';
import * as toastr from "toastr";
import {cardList} from "./cardList";

describe('CardList component', () => {
  let component;
  beforeEach(() => {
    angular
      .module('Card', ['toastr'])
      .constant('toastr', toastr)
      .component('cardList', cardList);
    angular.mock.module('Card');
    angular.mock.inject(($componentController, $rootScope) => {
      component = $componentController('cardList', null, {
        cards: [{
          id: 0,
          question: 'question0'
        },
        {
          id: 1,
          question: 'question1'
        },
        {
          id: 2,
          question: 'question2'
        }]
      });
      $rootScope.$digest();
    });
  });

  it('should contain a list of 3 cards', angular.mock.inject(() => {
    expect(component.cards.length).toEqual(3);
  }));

  it('should update card list', angular.mock.inject(toastr => {
    spyOn(toastr, 'info').and.callThrough();
    component.deleteCard(1);
    expect(component.cards.length).toEqual(2);
    expect(toastr.info).toHaveBeenCalled();
  }));
});
