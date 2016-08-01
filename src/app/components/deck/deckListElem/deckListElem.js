class DeckListElemController {
  /** @ngInject */
  constructor(deckService) {
    this.deckService = deckService;
  }
  delete(id) {
    this.deckService.delete(id).then(() => {
      this.deleteElem({id});
    });
  }
}

export const deckListElem = {
  template: `
      <div class="row">
        <div class="col-md-3">#{{$ctrl.index}}</div>
        <a ui-sref="deck({id:$ctrl.deck.id})" class="col-md-4">{{$ctrl.deck.name}}</a>
        <ng-pluralize class="col-md-4" count="$ctrl.deck.cards.length"
                     when="{'0': 'No card inside',
                         '1': 'One card',
                         'other': '{} cards'}">
        </ng-pluralize>
        <a class="text-info" ui-sref="deck({id:$ctrl.deck.id})">Edit</a>      
        <a class="text-danger" ng-click="$ctrl.delete($ctrl.deck.id)">Delete</a>      
      </div>
  `,
  controller: DeckListElemController,
  bindings: {
    deck: '=',
    index: '<',
    deleteElem: '&'
  }
};
