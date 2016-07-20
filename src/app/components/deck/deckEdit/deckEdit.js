import angular from 'angular';

class DeckEditController {
  /** @ngInject */
  constructor(deckService, $state, toastr, $stateParams) {
    this.deckService = deckService;
    this.$state = $state;
    this.toastr = toastr;

    deckService.get($stateParams.id).then(response => {
      this.deckCopy = angular.copy(response.data);
      this.deck = response.data;
    });
  }

  submit() {
    this.submitted = true;
    this.deckService.save(this.deck).then(() => {
      this.toastr.success('Deck Updated', null, {
        timeOut: 500
      });
      this.submitted = false;
    });
  }

  isDeckUntouched() {
    return angular.equals(this.deck, this.deckCopy);
  }
}

export const deckEdit = {
  template: `
      <h1>Deck {{$ctrl.deck.name}}</h1>
      <form name="updateDeck">
        <div class="form-group" ng-class=" {'has-success':!updateDeck.deckName.$error.required,
                                          'has-error':updateDeck.deckName.$error.required,
                                          'has-feedback':!updateDeck.deckName.$error.required}">
          <label class="control-label" for="deckName">Name: </label>
          <input id="deckName" type="text" class="form-control" required="" ng-model="$ctrl.deck.name" 
                 name="deckName" aria-describedby="deckNameStatus">
          <span ng-show="updateDeck.deckName.$error.required" class="help-block">Name is required *</span>
          <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span id="deckNameStatus" class="sr-only">(success)</span>
        </div>
        <button type="submit" ng-disabled="updateDeck.$error.required || $ctrl.submitted || $ctrl.isDeckUntouched()" 
                class="btn" ng-click="$ctrl.submit()">
                Update
        </button>
        <button type="button" ui-sref="app" class="btn">Back to list</button>
      </form>
  `,
  controller: DeckEditController
};
