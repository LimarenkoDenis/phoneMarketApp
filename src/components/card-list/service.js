export default class CardService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.items = [];
    }

    list() {
        return this.$http.get('http://localhost:3000/phones').then((response) => {
            // console.log(response.data);
            return response.data;
        }).catch((e) => {
            console.log(JSON.stringify(e));
        });
    }

    detail(id) {
        return this.$http.get(`http://localhost:3000/ ${id}`);
    }

    remove(card) {
        var id = card.id;
        return this.$http.delete('http://localhost:3000/cards/' + id)
            .then((response) => {
                //   console.log(response.data);
                return response.data;
            })
            .catch((e) => {
                console.log(JSON.stringify(e));
            });
    }


    add(card) {
        card.id = this.items.length;
        card.date = new Date();
        return this.$http.post('http://localhost:3000/cards/', card)
            .then((response) => response.data);
    }

    save(card) {
        if (card.id) {
            return this.update(card);
        }
        return this.add(card);
    };


    totalCount() {
        return 10;
    };


    update() {
        // var index = this.items.findIndex(function(item) {
        //     return item.id === card.id;
        // });
        // this.cards[index] = card;
        return this.$http.put('http://localhost:3000/cards')
            .then(function(response) {
                return response.data;
            })
            .catch(function(e) {
                console.log(JSON.stringify(e));
            });
    }
}

// {
//   "cards": [
//     {
//         "id":0,
//         "title": "title0",
//         "description":"loremloremipson00000",
//         "date":"21 May, 2015",
//         "count": 5,
//         "cost": 12
//     },
//     {
//         "id":1,
//         "title": "title1",
//         "description":"loremloremipson111",
//         "date":"21 May, 2015",
//         "count": 5,
//         "cost": 12
//     },
//     {
//         "id":2,
//         "title": "title2",
//         "description":"loremloremipson22222",
//         "date":"21 May, 2015",
//         "count": 5,
//         "cost": 12
//     }
//   ]
// }
