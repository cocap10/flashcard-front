import angular from 'angular';
import 'angular-mocks';
import cardService from './cardService';

describe('Card service', () => {
  beforeEach(() => {
    angular.module('Card', [])
      .constant('API', 'http://localhost:8080/api')
      .service('cardService', cardService);
    angular.mock.module('Card');
  });

  it('should define get', angular.mock.inject(cardService => {
    expect(typeof cardService.get().then).toBe('function');
  }));

  it('should define create', angular.mock.inject(cardService => {
    expect(typeof cardService.create().then).toBe('function');
  }));

  it('should define delete', angular.mock.inject(cardService => {
    expect(typeof cardService.delete().then).toBe('function');
  }));

  it('should define getall', angular.mock.inject(cardService => {
    expect(typeof cardService.getAll().then).toBe('function');
  }));

  it('should define getAllFromDeck', angular.mock.inject(cardService => {
    expect(typeof cardService.getAllFromDeck().then).toBe('function');
  }));

  it('should define save', angular.mock.inject(cardService => {
    expect(typeof cardService.save({id: 1}).then).toBe('function');
  }));
});
