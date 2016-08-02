import angular from 'angular';


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
      this.cardCopy = angular.copy(response.data);
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

  isDeckUntouched() {
    return angular.equals(this.card, this.cardCopy);
  }
}

export const cardEdit = {
  template: `
      <h1>Edit Card</h1> 
      <form name="editCard" ng-class=" {'has-success':!editCard.cardQuestion.$error.required,
                                          'has-error':editCard.cardQuestion.$error.required,
                                          'has-feedback':!editCard.cardQuestion.$error.required}">
      <div class="form-group">
          <label class="control-label" for="cardQuestion">Question: </label>
          <input type="text" class="form-control" id="cardQuestion" name="cardQuestion" ng-model="$ctrl.card.question" required>
          <span ng-show="createCard.cardQuestion.$error.required" class="help-block">Question is required *</span>
          <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <label class="control-label" for="cardAnswers">Answers: </label>
          <answer-list class="form-control" id="cardAnswers" card="$ctrl.card">//TODO : ListAnswer</answer-list> 
          <label class="control-label" for="cardDeck">Deck: </label>
          <select class="form-control" id="cardDeck" ng-model="$ctrl.deckId"> 
            <option ng-repeat="deck in $ctrl.decks" value="{{deck.id}}" ng-selected="$ctrl.deckId == deck.id">{{deck.name}}</option>
          </select>
      </div>
           <button type="submit" ng-disabled="editCard.$error.required || $ctrl.submitted || $ctrl.isDeckUntouched()" 
                class="btn" ng-click="$ctrl.submit()">
                Update
          </button>
          <button type="button" class="btn" ui-sref="deck({id : $ctrl.deckId })">Cancel</button>
      </form> 
  `,
  controller: CardEditController
};
