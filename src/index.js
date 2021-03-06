import angular from 'angular';
import {deckList} from './app/components/deck/deckList/deckList';
import {deckListElem} from './app/components/deck/deckListElem/deckListElem';
import {deckCreate} from "./app/components/deck/deckCreate/deckCreate";
import {deckEdit} from "./app/components/deck/deckEdit/deckEdit";
import {cardList} from "./app/components/card/cardList/cardList";
import {cardListElem} from "./app/components/card/cardListElem/cardListElem";
import {cardCreate} from "./app/components/card/cardCreate/cardCreate";
import {cardEdit} from "./app/components/card/cardEdit/cardEdit";
import deckService from "./app/services/deck/deckService";
import cardService from "./app/services/card/cardService";
import 'jquery';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-toastr';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/angular-toastr/dist/angular-toastr.css';
import routesConfig from './routes';
import './index.scss';
import * as toastr from "toastr";

export const app = 'app';

angular
  .module(app, ['ui.router', 'ngAnimate', 'toastr'])
  .config(routesConfig)
  .component('deckList', deckList)
  .component('deckListElem', deckListElem)
  .component('deckCreate', deckCreate)
  .component('deckEdit', deckEdit)
  .component('cardList', cardList)
  .component('cardListElem', cardListElem)
  .component('cardCreate', cardCreate)
  .component('cardEdit', cardEdit)
  .service('deckService', deckService)
  .service('cardService', cardService)
  .constant('toastr', toastr)
  .constant('API', 'http://localhost:8080/api');

