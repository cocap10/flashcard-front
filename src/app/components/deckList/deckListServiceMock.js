class DeckListServiceMock {
  /** @ngInject */
  constructor($q) {
    this.$q = $q;
  }
  get() {
    return this.$q(resolve => resolve({
      data: [
        {
          id: '1',
          name: 'test'
        }, {
          id: '2',
          name: 'Martin'
        }, {
          id: '3',
          name: 'Antoine'
        }]
    }));
  }
}

export default DeckListServiceMock;
