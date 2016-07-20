class DeckListController {
  /** @ngInject */
  constructor(deckListService) {
    deckListService.get().then(response => {
      this.decks = response.data;
    });
  }
}

export const deckList = {
  template: `
      <h1>Availables Decks</h1>
      <ul ng-repeat="deck in $ctrl.decks" class="list-group">
        <deck-list-elem deck="deck" index="$index + 1" class="list-group-item"></deck-list-elem>
      </ul>
  `,
  controller: DeckListController
};
