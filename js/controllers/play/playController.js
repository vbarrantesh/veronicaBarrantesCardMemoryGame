import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new PlayView(parent, this);
        this.service = new PlayService(this);
        this.cards = null;
        this.timeShowingTimer = null;
    }

    show(cards) {
        this.cards = cards;
        this.view.showCards(this.cards);
    }

    onCardSelection() {
        if (this.timeShowingTimer !== null) return;

        let card1 = null;
        let card2 = null;

        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];

            if (card.isSelected && card1 === null) {
                card1 = card;
                this.triggerShowCardEvent();
            } else if (card.isSelected && card2 === null) {
                card2 = card;
                this.triggerShowCardEvent();
            }
        }

        if (card1 !== null && card2 !== null) {
            this.timeShowingTimer = window.setTimeout(() => {
                if (card1.id === card2.id) {
                    card1.isSelected = false;
                    card2.isSelected = false;
                    card1.isDiscovered = true;
                    card2.isDiscovered = true;
                }
                this.timeShowingTimer = null;
                this.view.resetCards();

                if (this.isGameComplete) {
                    console.log("Game completed");
                }

            }, 1500);
        }
        console.log(this.cards);
    }

    triggerShowCardEvent() {
        let event = new CustomEvent('show-card', {
            detail: {
                state: ''
            },
            bubbles: true,
            cancelable: true,
            composed: false
        });
        this.view.dispatchEvent(event);
    }

    isGameComplete() {
        //let isGameComplete = true;
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (!card.isDiscovered) {
                return false;
            }
        }
        return true;
    }
}