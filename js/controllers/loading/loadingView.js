import { BaseView } from "../../views/baseView.js";

export class LoadingView extends BaseView {
    constructor(parent, controller) {
        // super(parent, controller);
        super(parent, controller);


    }


}

customElements.define('loading-view', LoadingView);