export default class PhoneListController {
  constructor(PhoneService) {
    'ngInject';
    this.PhoneService = PhoneService;
    // this.items = [];
  }

  $onInit() {
    this.PhoneService.list().then((resolve) => {
      this.items = resolve;
        console.log(this.items);
    });
  }

 
}
