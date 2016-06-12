import template from './card.html';
import controller from './controller';

export default {
  template,
  controller,
  bindToController: true,
  bindings: {
    item: '='
  },
  require: {
    PhoneListController: '^^phoneList'
  }
};
