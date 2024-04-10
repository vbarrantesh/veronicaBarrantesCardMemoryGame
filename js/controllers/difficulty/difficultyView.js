import { div, span } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";

export class DifficultyView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "difficultyView";

        let divInstruction = div({ className: 'divInstruction' }, this);
        span({ className: 'instructionTitle', innerHTML: 'Select a difficulty level' }, divInstruction);

        let levelContainer = div({ className: 'levelContainer' }, this);

        let easyLevel = div({ className: 'divLevel' }, levelContainer);
        div({ className: 'easyStars' }, easyLevel);
        div({ className: 'easyLbl', innerHTML: 'Easy' }, easyLevel);


        let normalLevel = div({ className: 'divLevel' }, levelContainer);
        div({ className: 'normalStars' }, normalLevel);
        div({ className: 'normalLbl', innerHTML: 'Normal' }, normalLevel);

        let hardLevel = div({ className: 'divLevel' }, levelContainer);
        div({ className: 'hardStars' }, hardLevel);
        div({ className: 'hardLbl', innerHTML: 'Hard' }, hardLevel);


        /*
                this.divStarContainer = div({ className: 'divStarContainer' }, this.levelContainer);


                let star2 = div({ className: 'star full' }, this.divStarContainer);
                let star3 = div({ className: 'star empty' }, this.divStarContainer);

                // Agregar el texto "Easy"
                div("Easy", this.levelContainer);

                // Agregar el contenedor principal al elemento 'parent' proporcionado
                this.parent.appendChild(this.levelContainer);*/
    }
}

customElements.define('difficulty-view', DifficultyView);