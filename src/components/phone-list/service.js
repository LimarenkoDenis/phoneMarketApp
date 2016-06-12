export default class PhoneService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.items = [];
    }

    list() {
        return this.$http.get('http://localhost:3000/phones').then((response) => {
            return response.data;
        }).catch((e) => {
            console.log(JSON.stringify(e));
        });
    }

}

