export class ScoresService {
    constructor(controller) {
        this.controller = controller;
        this.getScores();
    }
    getScores() {
        fetch(`https://veronicbarrantescardmemorygame-default-rtdb.firebaseio.com/data/.json`)
            .then(response => {
                response.json().then(data => {
                    let scores = [];
                    for (const key in data) {
                        const score = data[key];
                        if (score.username !== '') {
                            scores.push(score);
                        }
                    }
                    this.controller.showScores(scores);
                }).catch(error => {
                    console.log('Error parsing JSON for Scores:', error);
                });
            }).catch(error => {
                console.log('Error getting Scores:', error);
            });
    }
}