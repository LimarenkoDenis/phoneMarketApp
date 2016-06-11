export default class PhoneController {
  constructor() {
    'ngInject';
  }

  remove() {
    this.PhoneListController.remove(this.item);
  }
}
