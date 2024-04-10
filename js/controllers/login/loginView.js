import { div, span, input } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";

export class LoginView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "loginView";

        let logo = div({ className: 'creditsView-logo' }, this);

        span({ className: 'infoLbl', innerHTML: 'Save your info to record your scores' }, this);

        input({ className: 'inputLbl', placeholder: 'Name/Username' }, this);

        new GameButton(this, 'Save', () => { /*this.onMenuButtonClick(DIFFICULTY_STATE); */ });




    }
}

customElements.define('login-view', LoginView);