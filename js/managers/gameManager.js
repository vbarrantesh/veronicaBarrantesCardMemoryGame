import { div, span } from "../libs/html.js";
import { LoadingController } from "../controllers/loading/loadingController.js";
import { MenuController } from "../controllers/menu/menuController.js";
import { PlayController } from "../controllers/play/playController.js";
import { CreditsController } from "../controllers/credits/creditsController.js";

export class GameManager {
    constructor() {
        this.mainContainer = div({ className: 'mainContainer' }, document.body);
        this.navbarContainer = div({ className: 'navbarContainer' }, this.mainContainer);
        this.contentContainer = div({ className: 'contentContainer' }, this.mainContainer);
        this.currentController = null;

        //this.navbarElements = div({ className: 'navbarContainer-navbarElements' }, this.navbarContainer);

        this.backBtn = div({ className: 'navbarContainer-backBtn hidden', innerHTML: 'Back', onclick: this.onBackBtn.bind(this) }, this.navbarContainer);

        this.appTitle = span({ className: 'navbarContainer-title', innerHTML: '' }, this.navbarContainer);

        this.hudColumn1 = div({ className: 'navbarContainer-hubContainer hidden' }, this.navbarContainer);
        this.timeTitle = span({ className: 'navbarContainer-timeTitle', innerHTML: 'Timer' }, this.hudColumn1);
        this.timeLbl = span({ className: 'navbarContainer-timeLbl', innerHTML: '0' }, this.hudColumn1);

        this.hudColumn2 = div({ className: 'navbarContainer-hubContainer hidden' }, this.navbarContainer);
        this.clicksTitle = span({ className: 'navbarContainer-timeTitle', innerHTML: 'Clicks' }, this.hudColumn2);
        this.clicksLbl = span({ className: 'navbarContainer-timeLbl', innerHTML: '0' }, this.hudColumn2);

        this.resetBtn = div({ className: 'navbarContainer-resetBtn hidden', innerHTML: 'Reset', onclick: this.onResetBtn.bind(this) }, this.navbarContainer);
        //div({ className: 'navbarContainer-resetTitle', innerHTML: 'Reset' }, this.resetBtn);

        this.mainContainer.addEventListener('loading-completed', (event) => {
            this.loadingCompleted();
        });

        this.mainContainer.addEventListener('update-play-game-time', (event) => {
            this.timeLbl.innerHTML = event.detail.time;
        });

        this.mainContainer.addEventListener('update-clicks', (event) => {
            this.clicksLbl.innerHTML = event.detail.clicks;
        });

        this.mainContainer.addEventListener('goto-state', (event) => {
            this.goto(event.detail.state);
        });

        //this.goto(LOADING_STATE);

        this.goto(PLAY_STATE);
    }

    goto(state) {
        if (this.currentController !== null) {
            this.currentController.delete();
            this.currentController = null;
        }

        if (state === MENU_STATE || state === LOADING_STATE) {
            this.backBtn.classList.add('hidden');
            this.appTitle.classList.remove('hidden');
            this.hudColumn1.classList.add('hidden');
            this.hudColumn2.classList.add('hidden');
            this.resetBtn.classList.add('hidden');
        } else {
            this.backBtn.classList.remove('hidden');
        }
        switch (state) {
            case LOADING_STATE:
                this.currentController = new LoadingController(this.contentContainer);
                break;
            case MENU_STATE:
                this.appTitle.innerHTML = 'HOME';
                this.currentController = new MenuController(this.contentContainer);
                break;
            case LOGIN_STATE:
                this.appTitle.innerHTML = 'LOGIN';
                break;
            case SCORES_STATE:
                this.appTitle.innerHTML = 'SCORES';
                break;
            case LANGUAGE_STATE:
                this.appTitle.innerHTML = 'LANGUAGE';
                break;
            case CREDITS_STATE:
                this.appTitle.innerHTML = 'CREDITS';
                this.currentController = new CreditsController(this.contentContainer);
                break;
            case THEME_STATE:
                this.appTitle.innerHTML = 'THEMES';
                break;
            case DIFFICULTY_STATE:
                this.appTitle.innerHTML = 'DIFFICULTY';
                break;
            case RESULTS_STATE:

                break;
            case PLAY_STATE:
                this.appTitle.classList.add('hidden');
                this.hudColumn1.classList.remove('hidden');
                this.hudColumn2.classList.remove('hidden');
                this.resetBtn.classList.remove('hidden');
                this.currentController = new PlayController(this.contentContainer);
                break;

            default:
                break;
        }
    }

    loadingCompleted() {
        //Do things with the data
        this.currentController.delete();
    }

    onBackBtn() {
        this.goto(MENU_STATE);
    }

    onResetBtn() {
        this.timeLbl.innerHTML = 0;
        this.clicksLbl.innerHTML = 0;
        this.goto(PLAY_STATE);
    }


}

export const LOADING_STATE = 0;
export const MENU_STATE = 1;
export const LOGIN_STATE = 2;
export const SCORES_STATE = 3;
export const LANGUAGE_STATE = 4;
export const CREDITS_STATE = 5;
export const THEME_STATE = 6;
export const DIFFICULTY_STATE = 7;
export const RESULTS_STATE = 8;
export const PLAY_STATE = 9;