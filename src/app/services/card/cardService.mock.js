class CardServiceMock {
  /** @ngInject */
  constructor($q) {
    this.$q = $q;
  }

  get(id) {
    return this.$q(resolve => resolve({
      data: {
        id,
        question: 'question1'
      }
    }));
  }

  create(card) {
    card.id = 6;
    return this.$q(resolve => resolve({
      data: card
    }));
  }

  save(card) {
    return this.$q(resolve => resolve({
      data: card
    }));
  }

  delete(id) {
    return this.$q(resolve => resolve(id));
  }
}

export default CardServiceMock;
