import { div, h1, span, img } from "../../libs/html.js";
import { LOGIN_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";

export class MenuView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);
        // this.classList.add('menuView');
        this.className = "menuView"
            //this.classList.add("menuView");

        let divTitle = div({ className: 'divTitle' }, this);
        h1({ innerHTML: 'Improve your mental <br> agility and have fun!<br>' }, divTitle);

        let divImg = div({ className: 'divImg' }, this);
        let iconURL = "assets/images/logo.png";
        let icon = img({ className: 'logoIcon', src: iconURL }, divImg);

        this.btnStart = new GameButton(this, 'Start', () => { console.log('Login') });
        this.btnStart.classList.add('btnStart');

        let divOne = div({ className: 'divOne' }, this);
        this.btnLogin = new GameButton(divOne, 'Login', () => { console.log('Login') })
        this.btnDifficulty = new GameButton(divOne, 'Difficulty', () => { console.log('Difficulty') });
        this.btnLogin.classList.add('menuBtns');
        this.btnDifficulty.classList.add('menuBtns');

        let divTwo = div({ className: 'divTwo' }, this);
        this.btnThemes = new GameButton(divTwo, 'Themes', () => { console.log('Inicio sesion') });
        this.btnScores = new GameButton(divTwo, 'Scores', () => { console.log('Inicio sesion') });
        this.btnThemes.classList.add('menuBtns');
        this.btnScores.classList.add('menuBtns');

        let divThree = div({ className: 'divThree' }, this);

        this.btnCredits = new GameButton(divThree, 'Credits', () => { console.log('Inicio sesion') });
        this.btnLanguage = new GameButton(divThree, 'Language', () => { console.log('Inicio sesion') });
        this.btnCredits.classList.add('menuBtns');
        this.btnLanguage.classList.add('menuBtns');







    }


}

customElements.define('menu-view', MenuView);


/* let divOne = div({ className: 'divOne' }, this);
       div({ innerHTML: 'Login', className: 'gameButton' }, divOne)
       div({ innerHTML: 'Difficulty', className: 'gameButton' }, divOne)

       let divTwo = div({ className: 'divOne' }, this);
       div({ innerHTML: 'Themes', className: 'gameButton' }, divTwo)
       div({ innerHTML: 'Scores', className: 'gameButton' }, divTwo)

       let divThree = div({ className: 'divOne' }, this);
       div({ innerHTML: 'Credits', className: 'gameButton' }, divThree)
       div({ innerHTML: 'Language', className: 'gameButton' }, divThree)*/