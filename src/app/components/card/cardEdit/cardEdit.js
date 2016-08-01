class CardEditController {
  /** @ngInject */
  constructor(cardService, deckService, $state, toastr, $stateParams) {
    this.cardService = cardService;
    this.deckService = deckService;
    this.$state = $state;
    this.toastr = toastr;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.deckService.getAll().then(response => {
      this.decks = response.data;
    });
    this.cardService.get(this.$stateParams.cardId).then(response => {
      this.card = response.data;
      this.deckId = this.$stateParams.deckId;
    });
  }

  submit() {
    this.submitted = true;
    this.card.deck = {id: this.deckId};
    this.cardService.save(this.card).then(() => {
      this.toastr.success('Card Updated', null, {
        timeOut: 500
      });
      this.submitted = false;
    });
  }
}

export const cardEdit = {
  template: `
      <h1>Edit Card</h1> 
      <form name="editCard">
      <div class="form-group">
          <label class="control-label" for="cardQuestion">Question: </label>
          <input class="form-control" id="cardQuestion" name="cardQuestion" ng-model="$ctrl.card.question" required>
          <label class="control-label" for="cardAnswers">Answers: </label>
          <answer-list class="form-control" id="cardAnswers" card="$ctrl.card">//TODO : ListAnswer</answer-list> 
          <label class="control-label" for="cardDeck">Deck: </label>
          <select class="form-control" id="cardDeck" ng-model="$ctrl.deckId"> 
            <option ng-repeat="deck in $ctrl.decks" value="{{deck.id}}" ng-selected="$ctrl.deckId == deck.id">{{deck.name}}</option>
          </select>
      </div>
          <button type="submit" class="btn" ng-click="$ctrl.submit()">
            Update
          </button>
          <button type="button" class="btn" ui-sref="deck({id : $ctrl.deckId })">Cancel</button>
      </form> 
  `,
  controller: CardEditController
};
