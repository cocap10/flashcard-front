import angular from 'angular';
import 'angular-mocks';
import DeckListService from './deckListService';

describe('DeckList service', () => {
  beforeEach(() => {
    angular.module('DeckList', []).service('DeckListService', DeckListService);
    angular.mock.module('DeckList');
  });

  it('should', angular.mock.inject(DeckListService => {
    expect(typeof DeckListService.get().then).toBe('function');
  }));
});
