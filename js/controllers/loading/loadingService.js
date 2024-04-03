import { MENU_STATE } from "../../managers/gameManager";

export class LoadingService {
    constructor(contoller) {
        this.contoller = contoller;
        this.getInitialData();
    }

    getInitialData() {
        window.setTimeout(() => {
            let event = new CustomEvent('goto-state', {
                detail: {
                    state: 'MENU_STATE'
                },
                bubbles: true,
                cancelable: true,
                composed: false
            });
            this.contoller.view.dispatchEvent(event);
        }, 3000);
    }
}