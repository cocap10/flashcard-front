class CardService {
  /** @ngInject */
  constructor($http, API) {
    this.$http = $http;
    this.API = `${API}/card`;
  }

  getAll() {
    return this.$http.get(`${this.API}`);
  }

  getAllFromDeck(deckId) {
    return this.$http.get(`${this.API}/deck/${deckId}`);
  }

  get(id) {
    return this.$http.get(`${this.API}/${id}`);
  }

  create(card) {
    return this.$http.post(`${this.API}`, card);
  }

  save(card) {
    return this.$http.put(`${this.API}/${card.id}`, card);
  }

  delete(id) {
    return this.$http.delete(`${this.API}/${id}`);
  }
}

export default CardService;
