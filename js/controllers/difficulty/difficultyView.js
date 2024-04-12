import { div, span } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";
import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MED, MENU_STATE } from "../../managers/gameManager.js";
import { GameButton } from "../../views/gameButton.js";

export class DifficultyView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "difficultyView";

        let divInstruction = div({ className: 'divInstruction' }, this);
        span({ className: 'instructionTitle', innerHTML: 'Select a difficulty level' }, divInstruction);

        let levelContainer = div({ className: 'levelContainer' }, this);

        let easyLevel = div({ className: 'divLevel' }, levelContainer);
        div({ className: 'easyStars' }, easyLevel);

        //let easyLbl = div({ className: 'easyLblDiv' /*innerHTML: 'Easy'*/ }, easyLevel);

        let easyLbl = div({ className: 'easyLblDiv' }, easyLevel);
        let easyBtn = new GameButton(easyLbl, 'Easy', () => { this.onGameButtonClick(DIFFICULTY_LOW); });
        easyBtn.classList.add('easyLbl');


        let normalLevel = div({ className: 'divLevel' }, levelContainer);
        div({ className: 'normalStars' }, normalLevel);
        // let normalLbl = div({ className: 'normalLblDiv' /*innerHTML: 'Normal'*/ }, normalLevel);
        let normalLbl = div({ className: 'normalLblDiv' }, normalLevel);

        let normalBtn = new GameButton(normalLbl, 'Normal', () => { this.onGameButtonClick(DIFFICULTY_MED); });
        normalBtn.classList.add('normalLbl');

        let hardLevel = div({ className: 'divLevel' }, levelContainer);
        div({ className: 'hardStars' }, hardLevel);

        //let hardLbl = div({ className: 'hardLblDiv' /*innerHTML: 'Hard' */ }, hardLevel);

        let hardLbl = div({ className: 'hardLblDiv' }, hardLevel);
        let hardBtn = new GameButton(hardLbl, 'Hard', () => { this.onGameButtonClick(DIFFICULTY_HIGH); });
        hardBtn.classList.add('hardLbl');

    }

    onGameButtonClick(difficulty) {
        this.controller.saveDifficulty(difficulty);

        let event = new CustomEvent('goto-state', {
            detail: {
                state: MENU_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false
        });
        this.dispatchEvent(event);
    }
}

customElements.define('difficulty-view', DifficultyView);