export default class CardController {
  constructor() {
    'ngInject';
  }

  remove() {
    this.CardListController.remove(this.item);
  }
}
