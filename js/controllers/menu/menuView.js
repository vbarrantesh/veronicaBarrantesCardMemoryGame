import { div, h1, span, img } from "../../libs/html.js";
import { LOGIN_STATE, SCORES_STATE, LANGUAGE_STATE, CREDITS_STATE, THEME_STATE, DIFFICULTY_STATE, PLAY_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";

export class MenuView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "menuView";

        let divTitle = div({ className: 'divTitle' }, this);
        h1({ innerHTML: 'Improve your mental <br> agility and have fun!<br>' }, divTitle);

        let divImg = div({ className: 'divImg' }, this);
        //revisar la imagen
        let iconURL = "assets/images/logo.png";
        let icon = img({ className: 'logoIcon', src: iconURL }, divImg);

        let btnStart = new GameButton(this, 'Start', () => {
            this.onMenuButtonClick(PLAY_STATE);
        });
        btnStart.classList.add('menuView-btnStart');

        let divOne = div({ className: 'divOne' }, this);
        new GameButton(divOne, 'Login', () => { this.onMenuButtonClick(LOGIN_STATE); });
        new GameButton(divOne, 'Difficulty', () => { this.onMenuButtonClick(DIFFICULTY_STATE); });

        let divTwo = div({ className: 'divTwo' }, this);
        new GameButton(divTwo, 'Themes', () => { this.onMenuButtonClick(THEME_STATE); });
        this
        new GameButton(divTwo, 'Scores', () => { this.onMenuButtonClick(SCORES_STATE); });

        let divThree = div({ className: 'divThree' }, this);

        new GameButton(divThree, 'Credits', () => { this.onMenuButtonClick(CREDITS_STATE); });
        new GameButton(divThree, 'Language', () => { this.onMenuButtonClick(LANGUAGE_STATE); });
    }

    onMenuButtonClick(state) {
        let event = new CustomEvent('goto-state', {
            detail: {
                state: state
            },
            bubbles: true,
            cancellable: true,
            composed: false
        });
        this.dispatchEvent(event);
    }
}

customElements.define('menu-view', MenuView);