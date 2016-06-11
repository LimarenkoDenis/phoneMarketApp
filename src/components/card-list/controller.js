export default class CardListController {
  constructor(CardService) {
    'ngInject';
    this.CardService = CardService;
    // this.items = [];
  }

  $onInit() {
    this.CardService.list().then((resolve) => {
      this.items = resolve;
        console.log(this.items);
    });
  }

  add(card) {
    this.CardService.add(card)
      .then( (resolve) => {
        this.items = resolve;
        this.$onInit();
        // self.CardService.update()
      });
  }

  remove(card) {
    console.log(card);
    this.CardService.remove(card).then((resolve) => {
      this.items = resolve;
      this.$onInit();
    });
  }
}
