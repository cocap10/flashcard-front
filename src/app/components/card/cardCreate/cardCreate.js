class CardCreateController {
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
    this.card = {};
    this.deckId = this.$stateParams.deckId;
  }

  submit() {
    this.submitted = true;
    this.card.deck = {id: this.deckId};
    this.cardService.create(this.card).then(() => {
      this.toastr.success('Card Created', null, {
        timeOut: 500,
        progressBar: true,
        onHidden: this.goToDeckPage()
      });
      this.submitted = false;
    });
  }

  goToDeckPage() {
    this.$state.go('deck', {id: this.deckId});
  }
}

export const cardCreate = {
  template: `
      <h1>Create Card</h1> 
      <form name="createCard" ng-class=" {'has-success':!createCard.cardQuestion.$error.required,
                                          'has-error':createCard.cardQuestion.$error.required,
                                          'has-feedback':!createCard.cardQuestion.$error.required}">
      <div class="form-group">
          <label class="control-label" for="cardQuestion">Question: </label>
          <input type="text" class="form-control" id="cardQuestion" name="cardQuestion" ng-model="$ctrl.card.question" required>
          <span ng-show="createCard.cardQuestion.$error.required" class="help-block">Question is required *</span>
          <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <label class="control-label" for="cardAnswers">Answers: </label>
          <answer-list class="form-control" id="cardAnswers" card="$ctrl.card">//TODO : ListAnswer</answer-list> 
          <label class="control-label" for="cardDeck">Deck: </label>
          <select class="form-control" id="cardDeck" ng-model="$ctrl.deckId" required> 
            <option ng-repeat="deck in $ctrl.decks" value="{{deck.id}}" ng-selected="$ctrl.deckId == deck.id">{{deck.name}}</option>
          </select>
      </div>
          <button type="submit" ng-disabled="createCard.$error.required || $ctrl.submitted" class="btn" ng-click="$ctrl.submit()">
            Submit
          </button>
          <button type="button" class="btn" ui-sref="deck({id : $ctrl.deckId })">Cancel</button>
      </form> 
  `,
  controller: CardCreateController
};
