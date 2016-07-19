class DeckListService {
  /** @ngInject */
  constructor($http) {
    this.$http = $http;
  }
  get() {
    return this.$http.get('http://localhost:8080/api/deck');
  }
}

export default DeckListService;
