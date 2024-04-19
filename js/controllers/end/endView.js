import { div, span } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";
import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MED, MENU_STATE, PLAY_STATE } from "../../managers/gameManager.js";
import { GameButton } from "../../views/gameButton.js";

export class EndView extends BaseView {
    constructor(parent, controller, score) {
        super(parent, controller);

        this.className = "endView";

        let endViewContainer = div({ className: 'endView-container' }, this);

        let divInstruction = div({ className: 'divInstruction' }, endViewContainer);
        span({ className: 'instructionTitle', innerHTML: 'Your results' }, divInstruction);

        let divDetails = div({ className: 'divDetails' }, endViewContainer);

        // let username = localStorage.getItem('username');

        let col1 = div({ className: 'columna1' }, divDetails);

        span({ className: 'usernameInfo info', innerHTML: score.username }, col1);

        div({ className: 'linea' }, col1);



        let col2 = div({ className: 'columna' }, divDetails);
        span({ className: 'timerLbl info', innerHTML: 'Timer:' }, col2);
        span({ className: 'timerInfo info', innerHTML: score.time }, col2);


        let col3 = div({ className: 'columna' }, divDetails);
        span({ className: 'clicksLbl info', innerHTML: 'Clicks:' }, col3);
        span({ className: 'clicksInfo info', innerHTML: score.clicks }, col3);

        let col4 = div({ className: 'columna' }, divDetails);
        span({ className: 'scoreLbl info', innerHTML: 'Score:' }, col4);
        span({ className: 'scoreInfo info', innerHTML: score.score }, col4);


        let col5 = div({ className: 'columna5' }, divDetails);
        let homeBtn = new GameButton(col5, 'Restart', () => { this.onGameButtonClick(PLAY_STATE); });
        homeBtn.classList.add('homeButton');

        let restartBtn = new GameButton(col5, 'Home', () => { this.onGameButtonClick(MENU_STATE); });
        restartBtn.classList.add('restartButton');

        /*  if (username) {
              usernameInfo.innerHTML = username;
          } else {
              // Si no hay nombre de usuario, ocultar la columna
              col1.style.display = 'none';
          }*/
    }

    onGameButtonClick(state) {
        let event = new CustomEvent('goto-state', {
            detail: {
                state: state
            },
            bubbles: true,
            cancelable: true,
            composed: false
        });
        this.dispatchEvent(event);
    }

    getUsername(col1) {

        let username = localStorage.getItem('username');
        if (username) {
            span({ className: 'usernameInfo', innerHTML: username }, col1);
        } else {
            col1.style.display = 'none';
        }

        localStorage.getItem('username', username);
    }
}

customElements.define('end-view', EndView);