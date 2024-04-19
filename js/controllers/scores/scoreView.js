import { div, h1, span, img } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";

export class ScoreView extends BaseView {
    constructor(parent, score) {
        super(parent, null);

        this.className = "scoreView";
        this.show(score);

        // let divInstruction = div({ className: 'divInstruction' }, this);

        // span({ className: 'instructionTitle', innerHTML: 'Ranking by score' }, divInstruction);
    }

    show(score) {
        console.log(score);
        let row1 = div({ className: 'scoreView-row1', innerHTML: score.username }, this);
        let row2 = div({ className: 'scoreView-row2' }, this);

        let col1 = div({ className: 'scoreView-col' }, row2);
        span({ className: 'scoreView-title', innerHTML: 'SCORE' }, col1)
        span({ className: 'scoreView-value', innerHTML: score.score }, col1)

        let col2 = div({ className: 'scoreView-col' }, row2);
        span({ className: 'scoreView-title', innerHTML: 'CLICKS' }, col2)
        span({ className: 'scoreView-value', innerHTML: score.clicks }, col2)

        let col3 = div({ className: 'scoreView-col' }, row2);
        span({ className: 'scoreView-title', innerHTML: 'TIME' }, col3)
        span({ className: 'scoreView-value', innerHTML: score.time }, col3)
    }
}

customElements.define('score-view', ScoreView);