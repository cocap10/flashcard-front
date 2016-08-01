export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<deck-list></deck-list>'
    })
    .state('deck', {
      url: '/deck/:id',
      template: `<deck-edit></deck-edit>`
    })
    .state('deckCreate', {
      url: '/deckCreate',
      template: '<deck-create></deck-create>'
    })
    .state('cardCreate', {
      url: '/cardCreate/:deckId',
      template: '<card-create></card-create>'
    })
    .state('card', {
      url: '/card/:deckId/:cardId',
      template: '<card-edit></card-edit>'
    });
}
