export class EndService {
    constructor(controller, score) {
        this.controller = controller;
        this.sendScore(score);
    }
    sendScore(score) {
        let config = {
            method: 'POST',
            body: JSON.stringify(score),
        }
        fetch(`https://veronicbarrantescardmemorygame-default-rtdb.firebaseio.com/data/.json`, config).then(response => {
            console.log(response);
        });
    }
}