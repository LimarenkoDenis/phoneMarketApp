export default class PhoneDetailController {
  constructor($routeParams, Phone) {
    'ngInject';
    this.phone = Phone.detail($routeParams.phoneId, phone => {
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }

  $onInit() {
    this.PhoneDetailService.list().then(resolve => {
      this.items = resolve;
    });
  }
}
