import ng from 'angular';

import Header from './header';
import PhoneList from './phone-list';
import Phone from './phone';

export default ng.module('app.components', [Header, PhoneList, Phone])
  .name;
