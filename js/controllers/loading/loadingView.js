import { div, span } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";

export class LoadingView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);
        this.classList.add('loadingView');

        let spinner = div({ className: 'loadingView-spinner' }, this);
        span({ className: 'loadingView-title', innerHTML: 'Loading...' }, this);

        gsap.to(spinner, { rotation: 360, duration: 2, ease: "elastic", repeat: -1, yoyo: true });
    }
}

customElements.define('loading-view', LoadingView);