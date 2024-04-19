import { div, span } from "../../libs/html.js";
import { MENU_STATE, THEME_FACES, THEME_FOOD, THEME_OBJECTS, THEME_ANIMALS } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";

export class ThemeView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "themeView";

        let divInstruction = div({ className: 'divInstruction' }, this);
        span({ className: 'instructionTitle', innerHTML: 'Select a theme' }, divInstruction);

        let divThemesInfo = div({ className: 'divThemesInfo' }, this);

        let containerOne = div({ className: 'themeContainer' }, divThemesInfo);
        let foodTheme = div({ className: 'foodTheme' }, containerOne);
        div({ className: 'iconTheme', innerHTML: '🍓' }, foodTheme);
        let foodBtn = new GameButton(foodTheme, 'Food', () => { this.onGameButtonClick(THEME_FOOD); });
        foodBtn.classList.add('themeView-foodBtn');

        let objectsTheme = div({ className: 'objectsTheme' }, containerOne);
        div({ className: 'iconTheme', innerHTML: '☎️' }, objectsTheme);
        let objectsBtn = new GameButton(objectsTheme, 'Objects', () => { this.onGameButtonClick(THEME_OBJECTS); });
        objectsBtn.classList.add('themeView-objectsBtn');

        let containerTwo = div({ className: 'themeContainer' }, divThemesInfo);
        let facesTheme = div({ className: 'facesTheme' }, containerTwo);
        div({ className: 'iconTheme', innerHTML: '😁' }, facesTheme);
        let facesBtn = new GameButton(facesTheme, 'Faces', () => { this.onGameButtonClick(THEME_FACES); });
        facesBtn.classList.add('themeView-facesBtn');


        let animalsTheme = div({ className: 'animalsTheme' }, containerTwo);
        div({ className: 'iconTheme', innerHTML: '🐥' }, animalsTheme);
        let animalsBtn = new GameButton(animalsTheme, 'Animals', () => { this.onGameButtonClick(THEME_ANIMALS); });
        animalsBtn.classList.add('themeView-animalsBtn');

    }

    onGameButtonClick(theme) {
        this.controller.saveTheme(theme);
        let event = new CustomEvent('goto-state', {
            detail: {
                state: MENU_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false
        });
        this.dispatchEvent(event);

    }
}
customElements.define('theme-view', ThemeView);