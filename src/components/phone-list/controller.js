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

  likes(card) {
    ++card.likes;
    this.PhoneService.likes(card)
      .then(
          this.PhoneService.list().then((resolve) => {
            this.items = resolve;
              console.log(this.items);
          })
      );
  }

  dislikes(card) {
    card.dislikes = ++card.dislikes;
    this.PhoneService.likes(card)
      .then(
          this.PhoneService.list().then((resolve) => {
            this.items = resolve;
              console.log(this.items);
          })
      );
  }

}
