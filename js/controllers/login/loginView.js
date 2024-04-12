import { div, span, input } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
import { MENU_STATE } from "../../managers/gameManager.js";

export class LoginView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "loginView";

        let logo = div({ className: 'creditsView-logo' }, this);

        span({ className: 'infoLbl', innerHTML: 'Save your info to record your scores' }, this);

        this.usernameIn = input({ className: 'inputLbl', placeholder: 'Name/Username' }, this);

        new GameButton(this, 'Save', () => { this.onGameButtonClick(); });
    }

    onGameButtonClick() {
        let username = this.usernameIn.value;
        if (username !== '') {
            this.controller.saveUsername(username);

            let event = new CustomEvent('goto-state', {
                detail: {
                    state: MENU_STATE
                },
                bubbles: true,
                cancelable: true,
                composed: false
            });
            this.dispatchEvent(event);
        } else {
            alert('Please add a username!');
        }
    }
}

customElements.define('login-view', LoginView);