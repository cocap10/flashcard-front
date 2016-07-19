import angular from 'angular';

import {deckList} from './app/components/deckList/deckList';
import {deckListElem} from './app/components/deckListElem/deckListElem';
import deckListService from './app/components/deckList/deckListService';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('deckList', deckList)
  .component('deckListElem', deckListElem)
  .service('deckListService', deckListService)
