class DeckListController {
  /** @ngInject */
  constructor(deckService, toastr) {
    this.toastr = toastr;
    this.deckService = deckService;
    deckService.getAll().then(response => {
      this.decks = response.data;
    });
  }

  deleteDeck(id) {
    this.decks = this.decks.filter(deck => deck.id !== id);
    this.toastr.info('Deck deleted', null, {
      timeOut: 500
    });
  }
}

export const deckList = {
  template: `
      <h1>Availables Decks <a ui-sref="deckCreate" class="glyphicon glyphicon-plus text-success pull-right"></a></h1>
      <ul ng-repeat="deck in $ctrl.decks" class="list-group">
        <deck-list-elem deck="deck" index="$index + 1" class="list-group-item" delete-elem="$ctrl.deleteDeck(id)"></deck-list-elem>
      </ul>
  `,
  controller: DeckListController
};
