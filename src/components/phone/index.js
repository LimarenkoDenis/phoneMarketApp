import ng from 'angular';

import PhoneComponent from './component';

export default ng.module('app.components.phone', [])
  .component('phone', PhoneComponent)
  .name;
