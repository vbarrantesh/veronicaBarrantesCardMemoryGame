import { div, h1, span, img } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";

export class ScoresView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "scoresView";

        let divInstruction = div({ className: 'divInstruction' }, this);

        span({ className: 'instructionTitle', innerHTML: 'Ranking by score' }, divInstruction);
    }
}

customElements.define('scores-view', ScoresView);