class CardListController {
  /** @ngInject */
  constructor(toastr) {
    this.toastr = toastr;
  }

  deleteCard(id) {
    this.cards = this.cards.filter(card => card.id !== id);
    this.toastr.info('Card deleted', null, {
      timeOut: 500
    });
  }
}

export const cardList = {
  template: `
      <h1>Cards : <a ui-sref="cardCreate({deckId:$ctrl.deckId})" class="glyphicon glyphicon-plus text-success pull-right"></a></h1>
      <ul ng-repeat="card in $ctrl.cards" class="list-group">
        <card-list-elem index="$index+1" card="card" deck-id="$ctrl.deckId" class="list-group-item" delete-elem="$ctrl.deleteCard(id)"></card-list-elem>
      </ul>
  `,
  controller: CardListController,
  bindings: {
    cards: '<',
    deckId: '<'
  }
};
