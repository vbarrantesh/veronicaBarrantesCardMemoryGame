import { div } from "../../libs/html.js";
import { BaseView } from "../..//views/baseView.js";
import { CardView } from "./cardView.js";

export class PlayView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);
        this.className = "PlayView";

        this.cardsContainer = div({ className: 'playView-cardsContainer' }, this);
        this.cardView = [];
    }
    showCards(cards) {
        cards.forEach(card => {
            this.cardViews.push(new CardView(this.cardsContainer, card, this.onCardSelected.bind(this)));
        });
    }

    onCardSelected(card) {
        this.controller.onCardViewSelection();
    }

    resetCards() {
        this.cardViews.forEach(cardView => {
            cardView.reset();
        });
    }

}

customElements.define('play-view', PlayView);