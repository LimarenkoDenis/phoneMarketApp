export default class PhoneDetailController {
  constructor($routeParams, Phone) {
    'ngInject';
    this.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          this.setImage(phone.images[0]);
        });

        this.setImage = function setImage(imageUrl) {
          this.mainImageUrl = imageUrl;
        };
  }

  $onInit() {
    this.PhoneDetailService.list().then((resolve) => {
      this.items = resolve;
        console.log(this.items);
    });
  }

 
}

//     angular.module('phoneDetail', [
//   'ngRoute',
//   'core.phone'
// ]);