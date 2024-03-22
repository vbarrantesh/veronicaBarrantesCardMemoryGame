import { div } from "../libs/html.js";
import { LoadingController } from "../controllers/loading/loadingController.js";
import { MenuController } from "../controllers/menu/menuController.js";

export class GameManager {
    constructor() {
        this.mainContainer = div({ className: 'mainContainer' }, document.body);
        this.navbarContainer = div({ className: 'navbarContainer' }, this.mainContainer);
        this.contentContainer = div({ className: 'contentContainer' }, this.mainContainer);
        this.currentController = null;

        this.mainContainer.addEventListener('loading-completed', (event) => {
            this.loadingCompleted();
        });

        this.mainContainer.addEventListener('goto-state', (event) => {
            this.goto(event.detail.state);
        });

        this.goto(LOADING_STATE);
    }

    goto(state) {
        switch (state) {
            case LOADING_STATE:
                this.currentController = new LoadingController(this.contentContainer);
                break;
            case MENU_STATE:
                this.currentController = new MenuController(this.contentContainer);
                break;
            case RESULTS_STATE:
                break;
            default:
                break;
        }
    }

    loadingCompleted() {
        //Do things with the data
        this.currentController.delete();
    }
}

export const LOADING_STATE = 0;
export const MENU_STATE = 1;
export const RESULTS_STATE = 2;