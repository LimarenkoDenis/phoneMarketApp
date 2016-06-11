import ng from 'angular';

import CardComponent from './component';

export default ng.module('app.components.card', [])
  .component('card', CardComponent)
  .name;
