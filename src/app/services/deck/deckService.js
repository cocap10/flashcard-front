class DeckService {
  /** @ngInject */
  constructor($http, API) {
    this.$http = $http;
    this.API = `${API}/deck`;
  }
  getAll() {
    return this.$http.get(`${this.API}`);
  }
  get(id) {
    return this.$http.get(`${this.API}/${id}`);
  }
  create(deck) {
    return this.$http.post(`${this.API}`, deck);
  }
  save(deck) {
    return this.$http.put(`${this.API}/${deck.id}`, deck);
  }
  delete(id) {
    return this.$http.delete(`${this.API}/${id}`);
  }
}

export default DeckService;
