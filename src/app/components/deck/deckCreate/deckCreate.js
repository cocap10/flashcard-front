class DeckCreateController {
  /** @ngInject */
  constructor(deckService, $state, toastr) {
    this.deckService = deckService;
    this.$state = $state;
    this.toastr = toastr;
  }

  submit() {
    this.submitted = true;
    this.deckService.create(this.deck).then(() => {
      this.toastr.success('Deck Created', null, {
        timeOut: 500,
        progressBar: true,
        onHidden: () => this.$state.go('app')
      });
    });
  }
}

export const deckCreate = {
  template: `
      <h1>Create Deck</h1>
      <form name="createDeck" ng-class=" {'has-success':!createDeck.deckName.$error.required,
                                          'has-error':createDeck.deckName.$error.required,
                                          'has-feedback':!createDeck.deckName.$error.required}">
        <div class="form-group">
          <label class="control-label" for="deckName">Name: </label>
          <input id="deckName" type="text" class="form-control" required="" 
                 ng-model="$ctrl.deck.name" name="deckName" aria-describedby="deckNameStatus">
          <span ng-show="createDeck.deckName.$error.required" class="help-block">Name is required *</span>
          <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
          <span id="deckNameStatus" class="sr-only">(success)</span>
        </div>
        <button type="submit" ng-disabled="createDeck.$error.required || $ctrl.submitted" 
                class="btn" ng-click="$ctrl.submit()">
            Submit
        </button>
        <button type="button" class="btn" ui-sref="app">Cancel</button>
      </form>
  `,
  controller: DeckCreateController
};
