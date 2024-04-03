export class PlayService {
    constructor(controller) {
        this.controller = controller;
        this.getData();
    }
    getData() {
        fetch('../../assets/data/data.json').then(response => {
            response.json().then(data => {
                this.controller.show(data.cards);
            }).catch(error => {
                console.log(error);
            });

        }).catch(error => {
            console.log(error);
        });
    }
}