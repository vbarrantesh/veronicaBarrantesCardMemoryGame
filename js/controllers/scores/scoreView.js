import { div, h1, span, img } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";

export class ScoreView extends BaseView {
    constructor(parent, score) {
        super(parent, null);

        this.className = "scoreView";
        this.show(score);
    }

    show(score) {
        console.log(score);
        let scoreContainer = div({ className: 'scoreView-scoreContainer' }, this);

        div({ className: 'scoreView-col1', innerHTML: score.username }, scoreContainer);

        div({ className: 'scoreView-col2' }, scoreContainer);

        let col3 = div({ className: 'scoreView-col3' }, scoreContainer);

        let row1 = div({ className: 'scoreView-col' }, col3);
        span({ className: 'scoreView-info', innerHTML: 'Time:' }, row1);
        span({ className: 'scoreView-value', innerHTML: score.time }, row1)

        let row2 = div({ className: 'scoreView-col' }, col3);
        span({ className: 'scoreView-title', innerHTML: 'Clicks:' }, row2)
        span({ className: 'scoreView-value', innerHTML: score.clicks }, row2)

        let row3 = div({ className: 'scoreView-col' }, col3);
        span({ className: 'scoreView-title', innerHTML: 'Score:' }, row3)
        span({ className: 'scoreView-value', innerHTML: score.score }, row3)

    }
}

customElements.define('score-view', ScoreView);