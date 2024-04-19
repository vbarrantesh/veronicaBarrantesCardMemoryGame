import { div, h1, span, img } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";
import { ScoreView } from "./scoreView.js";

export class ScoresView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "scoresView";

        let divInstruction = div({ className: 'divInstruction' }, this);

        span({ className: 'instructionTitle', innerHTML: 'Ranking by score' }, divInstruction);
    }

    showScores(scores) {

        scores.forEach(score => {
            let scoreView = new ScoreView(this, score);

        });
    }
}

customElements.define('scores-view', ScoresView);