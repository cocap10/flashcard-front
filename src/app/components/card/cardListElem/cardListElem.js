class CardListElemController {
  /** @ngInject */
  constructor(cardService) {
    this.cardService = cardService;
  }

  delete() {
    this.cardService.delete(this.card.id).then(() => {
      this.deleteElem({id: this.card.id});
    });
  }
}

export const cardListElem = {
  template: `
      <div class="row">
        <div class="col-md-3">#{{$ctrl.index}}</div>
        <a ui-sref="card({deckId: $ctrl.deckId, cardId: $ctrl.card.id})" class="col-md-4">{{$ctrl.card.question}}</a>
        <ng-pluralize class="col-md-4" count="$ctrl.card.answer.length"
                     when="{'0': 'No answer',
                         '1': 'One answer',
                         'other': '{} answers'}">
        </ng-pluralize> 
        <a class="text-info" ui-sref="card({deckId: $ctrl.deckId, cardId: $ctrl.card.id})">Edit</a>
        <a class="text-danger text-right" ng-click="$ctrl.delete()">Delete</a>      
      </div>
  `,
  controller: CardListElemController,
  bindings: {
    card: '=',
    index: '<',
    deleteElem: '&',
    deckId: '<'
  }
};

