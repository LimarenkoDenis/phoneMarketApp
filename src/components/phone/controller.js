export default class PhoneController {
  constructor() {
    'ngInject';
  }

  likes() {
    // this.item.likes++;
    this.PhoneListController.likes(this.item);
  }

  dislike() {
    this.PhoneListController.dislikes(this.item);
  }
}
