import { div, span } from "../libs/html.js";
import { LoadingController } from "../controllers/loading/loadingController.js";
import { MenuController } from "../controllers/menu/menuController.js";
import { PlayController } from "../controllers/play/playController.js";
import { CreditsController } from "../controllers/credits/creditsController.js";
//import { DifficultyView } from "../controllers/difficulty/difficultyView.js";
import { ThemeController } from "../controllers/theme/themeController.js";
import { ScoresController } from "../controllers/scores/scoresController.js";
import { LoginController } from "../controllers/login/loginController.js";
import { DifficultyController } from "../controllers/difficulty/difficultyController.js";
import { EndController } from "../controllers/end/endController.js";
import { EndView } from "../controllers/end/endView.js";

export class GameManager {
    constructor() {
        this.mainContainer = div({ className: 'mainContainer' }, document.body);
        this.navbarContainer = div({ className: 'navbarContainer' }, this.mainContainer);
        this.contentContainer = div({ className: 'contentContainer' }, this.mainContainer);
        this.currentController = null;

        //this.navbarElements = div({ className: 'navbarContainer-navbarElements' }, this.navbarContainer);

        this.backBtn = div({ className: 'navbarContainer-backBtn hidden ', innerHTML: 'Back', onclick: this.onBackBtn.bind(this) }, this.navbarContainer);

        this.navbarElements = div({ className: 'navbarContainer-navbarElements' }, this.navbarContainer);

        this.appTitle = span({ className: 'navbarContainer-title', innerHTML: '' }, this.navbarElements);

        this.hudColumn1 = div({ className: 'navbarContainer-hubContainer hidden' }, this.navbarElements);
        this.timeTitle = span({ className: 'navbarContainer-timeTitle', innerHTML: 'Timer' }, this.hudColumn1);
        this.timeLbl = span({ className: 'navbarContainer-timeLbl', innerHTML: '0' }, this.hudColumn1);

        this.hudColumn2 = div({ className: 'navbarContainer-hubContainer hidden' }, this.navbarElements);
        this.clicksTitle = span({ className: 'navbarContainer-timeTitle', innerHTML: 'Clicks' }, this.hudColumn2);
        this.clicksLbl = span({ className: 'navbarContainer-timeLbl', innerHTML: '0' }, this.hudColumn2);

        this.resetBtn = div({ className: 'navbarContainer-resetBtn hidden', innerHTML: 'Reset', onclick: this.onResetBtn.bind(this) }, this.navbarElements);
        //div({ className: 'navbarContainer-resetTitle', innerHTML: 'Reset' }, this.resetBtn);

        this.score = null;

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
        this.mainContainer.addEventListener('goto-end-state', (event) => {
            this.score = event.detail.score;
            this.goto(END_STATE);
        });
        this.checkLocalStorage;
        this.goto(LOADING_STATE);
        //this.goto(DIFFICULTY_STATE);
        //this.goto(THEME_STATE);

        //this.goto(PLAY_STATE);
        //this.goto(CREDITS_STATE);
        this.score = { username: 'Brayan', score: 43, clicks: 21, time: 12, difficulty: 2 };
        //this.goto(END_STATE);
        //this.goto(SCORES_STATE);
    }

    goto(state) {
        if (this.currentController !== null) {
            this.currentController.delete();
            this.currentController = null;
        }

        if (state === MENU_STATE || state === LOADING_STATE || state === END_STATE) {
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
                this.currentController = new LoginController(this.contentContainer);
                break;
            case SCORES_STATE:
                this.appTitle.innerHTML = 'SCORES';
                this.currentController = new ScoresController(this.contentContainer);

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
                this.currentController = new ThemeController(this.contentContainer);
                break;
            case DIFFICULTY_STATE:
                this.appTitle.innerHTML = 'LEVEL';
                this.currentController = new DifficultyController(this.contentContainer);
                break;
            case RESULTS_STATE:

                break;
            case PLAY_STATE:
                this.timeLbl.innerHTML = 0;
                this.clicksLbl.innerHTML = 0;
                this.appTitle.classList.add('hidden');
                //this.navbarElements.classList.add('hidden');
                this.hudColumn1.classList.remove('hidden');
                this.hudColumn2.classList.remove('hidden');
                this.resetBtn.classList.remove('hidden');
                this.resetHub();
                this.currentController = new PlayController(this.contentContainer);
                break;

            case END_STATE:
                this.appTitle.innerHTML = 'Game Completed';
                this.currentController = new EndController(this.contentContainer, this.score);
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
        this.resetHub()
            // this.timeLbl.innerHTML = 0;
            // this.clicksLbl.innerHTML = 0;
        this.goto(PLAY_STATE);
    }

    resetHub() {
        this.timeLbl.innerHTML = 0;
        this.clicksLbl.innerHTML = 0;
    }
    checkLocalStorage() {
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', THEME_FACES);
        }

        if (!localStorage.getItem('difficulty')) {
            localStorage.setItem('difficulty', DIFFICULTY_MED);
        }
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
export const END_STATE = 10;

export const THEME_FACES = 'faces';
export const THEME_FOOD = 'food';
export const THEME_OBJECTS = 'objects';
export const THEME_ANIMALS = 'animals';

export const DIFFICULTY_LOW = 4;
export const DIFFICULTY_MED = 8;
export const DIFFICULTY_HIGH = 12;