export const deckListElem = {
  template: `<a ui-sref="deck({id:$ctrl.deck.id})" class="row">
    <div class="col-md-3">#{{$ctrl.index}}</div>
    <div  class="col-md-4">{{$ctrl.deck.name}}</div>
    <ng-pluralize class="col-md-4" count="$ctrl.deck.cards.length"
                 when="{'0': 'Aucune bonne réponse',
                     '1': 'Une bonne réponse',
                     'other': '{} bonnes réponses'}">
    </ng-pluralize>
    </a>`,
  bindings: {
    deck: '<',
    index: '<'
  }
};
