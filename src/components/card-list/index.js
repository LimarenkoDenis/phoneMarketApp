import ng from 'angular';

import CardListComponent from './component';
import CardService from './service';

export default ng.module('app.components.cardlist', [])
  .component('cardList', CardListComponent)
  .service('CardService', CardService)
  .name;
