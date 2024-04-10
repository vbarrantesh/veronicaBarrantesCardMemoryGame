import { div, h1, span, img } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";

export class ThemeView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "themeView";

        let divInstruction = div({ className: 'divInstruction' }, this);
        span({ className: 'instructionTitle', innerHTML: 'Select a theme' }, divInstruction);

        let containerOne = div({ className: 'themeContainer' }, this);
        let foodTheme = div({ className: 'foodTheme' }, containerOne);
        div({ className: 'iconTheme', innerHTML: '🍓' }, foodTheme);
        let foodBtn = new GameButton(foodTheme, 'Food', () => { /*this.onMenuButtonClick(DIFFICULTY_STATE); */ });
        foodBtn.classList.add('themeView-foodBtn');

        let objectsTheme = div({ className: 'objectsTheme' }, containerOne);
        div({ className: 'iconTheme', innerHTML: '☎️' }, objectsTheme);
        let objectsBtn = new GameButton(objectsTheme, 'Objects', () => { /*this.onMenuButtonClick(DIFFICULTY_STATE); */ });
        objectsBtn.classList.add('themeView-objectsBtn');

        let containerTwo = div({ className: 'themeContainer' }, this);
        let facesTheme = div({ className: 'facesTheme' }, containerTwo);
        div({ className: 'iconTheme', innerHTML: '😁' }, facesTheme);
        let facesBtn = new GameButton(facesTheme, 'Objects', () => { /*this.onMenuButtonClick(DIFFICULTY_STATE); */ });
        facesBtn.classList.add('themeView-facesBtn');


        let animalsTheme = div({ className: 'animalsTheme' }, containerTwo);
        div({ className: 'iconTheme', innerHTML: '🐥' }, animalsTheme);
        let animalsBtn = new GameButton(animalsTheme, 'Animals', () => { /*this.onMenuButtonClick(DIFFICULTY_STATE); */ });
        animalsBtn.classList.add('themeView-animalsBtn');

    }

}

customElements.define('theme-view', ThemeView);