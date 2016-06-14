/* global API */

export default class PhoneService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  list() {
    return this.$http.get(`${API}/phones`)
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }

  detail(id) {
    return this.$http.get(`${API}/phones/${id}`)
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }

  like(card) {
    card.likes++;
    return this.$http.put(`${API}/phones/${card.id}`, card)
    .then(response => response.data)
    .catch((e) => {
      console.log(JSON.stringify(e));
    });
  }

  dislike(card) {
    card.dislikes++;
    return this.$http.put(`${API}/phones/${card.id}`, card)
    .then(response => response.data)
    .catch((e) => {
      console.log(JSON.stringify(e));
    });
  }
}
