import angular from 'angular';
import 'angular-mocks';
import deckService from './deckService';

describe('Deck service', () => {
  beforeEach(() => {
    angular.module('Deck', [])
      .constant('API', 'http://localhost:8080/api')
      .service('deckService', deckService);
    angular.mock.module('Deck');
  });

  it('should define get', angular.mock.inject(deckService => {
    expect(typeof deckService.get().then).toBe('function');
  }));

  it('should define create', angular.mock.inject(deckService => {
    expect(typeof deckService.create().then).toBe('function');
  }));

  it('should define delete', angular.mock.inject(deckService => {
    expect(typeof deckService.delete().then).toBe('function');
  }));

  it('should define getall', angular.mock.inject(deckService => {
    expect(typeof deckService.getAll().then).toBe('function');
  }));

  it('should define save', angular.mock.inject(deckService => {
    expect(typeof deckService.save({id: 1}).then).toBe('function');
  }));
});
