export default class PhoneListController {
  constructor(PhoneService) {
    'ngInject';
    this.PhoneService = PhoneService;
  }

  $onInit() {
    this.PhoneService.list().then(resolve => {
      this.items = resolve;
    });
  }
}
