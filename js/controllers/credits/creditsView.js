//import { div, span } from "../libs/html.js";
import { LOGIN_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";

export class CreditsView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "CreditsView";
        this.innerHTML = "Credits";
    }
}
customElements.define('credits-view', CreditsView);