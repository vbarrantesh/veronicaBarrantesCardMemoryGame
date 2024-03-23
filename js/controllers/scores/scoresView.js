//import { span } from "../controller.js";
import { BaseView } from "../../views/baseView.js";

export class ScoresView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);
        this.classList.add('menuView');
        this.innerHTML = 'SCORES';
        //this.classList.add("menuView");
    }
}

customElements.define('scores-view', ScoresView);