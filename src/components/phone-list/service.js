export default class PhoneService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.items = [];
  }

  list() {
    return this.$http.get('http://localhost:3000/phones')
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }

  likes(card) {
    return this.$http.post('http://localhost:3000/phones', card)
    .then((response) => {
      return response.data;
    })
    .catch(function(e) {
      console.log(JSON.stringify(e));
    });
  }
}
