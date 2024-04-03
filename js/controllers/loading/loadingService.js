import { MENU_STATE } from "../../managers/gameManager";

export class LoadingService {
    constructor(contoller) {
        this.contoller = contoller;
        this.getInitialData();
    }

    getInitialData() {

        //VERO: El problema es que estas pasando como estado un string y no la constante MENU_STATE, quitale las comillas a 'MENU_STATE'
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