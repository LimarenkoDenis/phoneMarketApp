export default class PhoneController {
  constructor(PhoneService) {
    'ngInject';
    this.PhoneService = PhoneService;
  }

  like() {
    this.PhoneService.like(this.item);
  }

  dislike() {
    this.PhoneService.dislike(this.item);
  }
}
