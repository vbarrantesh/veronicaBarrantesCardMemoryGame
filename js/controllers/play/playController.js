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
        this.gamePlayTimer = null;
        this.gamePlayTime = 0;
        this.clicks = 0;
        this.card1 = null;
        this.card2 = null;
    }

    show(cards) {
        this.cards = cards;
        this.view.showCards(this.cards);

        this.gamePlayTimer = window.setInterval(() => {
            this.gamePlayTime += 1;
            this.triggerPlayGameTimeEvent();
        }, 1000);
    }

    onCardSelection(cardSelected) {

        if (this.timeShowingTimer !== null) return;
        if (this.card1 !== null && this.card2 !== null) return;
        if (this.card1 !== null && this.card1.id === cardSelected.id) return;

        if (this.card1 === null) {
            this.card1 = cardSelected;
            this.triggerShowCardEvent();
        } else if (this.card2 === null) {
            this.card2 = cardSelected;
            this.triggerShowCardEvent();

        }

        if (this.card1 !== null && this.card2 !== null) {

            this.timeShowingTimer = window.setTimeout(() => {
                if (this.card1.emojiId === this.card2.emojiId) {
                    this.card1.isSelected = false;
                    this.card2.isSelected = false;
                    this.card1.isDiscovered = true;
                    this.card2.isDiscovered = true;
                }

                this.card1 = null;
                this.card2 = null;
                this.timeShowingTimer = null;
                this.view.resetCards();

                if (this.isGameComplete()) {
                    this.saveScore();
                    this.stopAndClearGameTimer();
                    console.log('GAME COMPLETE');
                    this.view.playHappyCards();
                }

            }, 1500);
        }
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

        //TODO: Find a better plave to trigger event.
        this.triggerClickEvent();
    }

    isGameComplete() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (!card.isDiscovered) {
                return false;
            }
        }

        return true;
    }

    triggerPlayGameTimeEvent() {
        let event = new CustomEvent('update-play-game-time', {
            detail: {
                time: this.gamePlayTime
            },
            bubbles: true,
            cancelable: true,
            composed: false
        });
        this.view.dispatchEvent(event);
    }

    triggerClickEvent() {
        this.clicks += 1;
        let event = new CustomEvent('update-clicks', {
            detail: {
                clicks: this.clicks
            },
            bubbles: true,
            cancelable: true,
            composed: false
        });
        this.view.dispatchEvent(event);
    }

    delete() {
        super.delete();
        this.stopAndClearGameTimer();
    }

    stopAndClearGameTimer() {
        window.clearInterval(this.gamePlayTimer);
        this.gamePlayTimer = null;
    }

    saveScore() {
        console.log('GAME COMPLETE');

    }
}