class DeckServiceMock {
  /** @ngInject */
  constructor($q) {
    this.$q = $q;
  }
  getAll() {
    return this.$q(resolve => resolve({
      data: [
        {
          id: 1,
          name: 'test'
        }, {
          id: 2,
          name: 'Martin'
        }, {
          id: 3,
          name: 'Antoine'
        }]
    }));
  }
  get(id) {
    return this.$q(resolve => resolve({
      data: {
        id,
        name: 'test'
      }
    }));
  }
  create(deck) {
    deck.id = 1;
    return this.$q(resolve => resolve({
      data: deck
    }));
  }
  save(deck) {
    return this.$q(resolve => resolve({
      data: deck
    }));
  }
  delete(id) {
    return this.$q(resolve => resolve(id));
  }
}

export default DeckServiceMock;
