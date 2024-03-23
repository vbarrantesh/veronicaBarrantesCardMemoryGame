//import { span } from "../controller.js";
import { BaseView } from "../../views/baseView.js";

export class PlayView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);
        this.classList.add('menuView');
        this.innerHTML = 'MENU';
        //this.classList.add("menuView");
    }
}

customElements.define('play-view', PlayView);