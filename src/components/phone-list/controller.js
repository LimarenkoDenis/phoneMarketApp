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

  add(card) {
    this.PhoneService.add(card)
      .then( (resolve) => {
        this.items = resolve;
        this.$onInit();
        // self.CardService.update()
      });
  }

  remove(card) {
    console.log(card);
    this.PhoneService.remove(card).then((resolve) => {
      this.items = resolve;
      this.$onInit();
    });
  }
}
