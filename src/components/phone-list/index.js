import ng from 'angular';

import PhoneListComponent from './component';
import PhoneService from './service';

export default ng.module('app.components.phonelist', [])
  .component('phoneList', PhoneListComponent)
  .service('PhoneService', PhoneService)
  .name;
