import template from './card.html';
import controller from './controller';

export default {
  template,
  controller,
  bindToController: true,
  // scope: {
  //   item: '='
  // },
  bindings: {
    item: '='
  },
  require: {
    CardListController: '^^cardList'
  }
};
