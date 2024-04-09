import { div } from "../../libs/html.js";
import { BaseView } from "../..//views/baseView.js";
import { CardView } from "./cardView.js";

export class PlayView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "playView";
        this.cardsContainer = div({ className: 'playView-cardsContainer' }, this);
        this.cardViews = [];
    }
    showCards(cards) {
        cards.forEach((card, i) => {
            card.id = i;
            this.cardViews.push(new CardView(this.cardsContainer, card, this.onCardSelected.bind(this)));
        });
    }

    /*showCards(cards) {
        const cardsPerRow = 4;

        this.cardsContainer.innerHTML = '';

        for (let i = 0; i < cards.length; i += cardsPerRow) {
            const row = div({ className: 'playView-cardRow' });
            this.cardsContainer.appendChild(row);

            for (let j = 0; j < cardsPerRow; j++) {
                const cardIndex = i + j;
                if (cardIndex < cards.length) {
                    const cardView = new CardView(row, cards[cardIndex], this.onCardSelected.bind(this));
                    this.cardViews.push(cardView);
                } else {
                    break;
                }
            }
        }
    }*/

    onCardSelected(cardSelected) {
        this.controller.onCardSelection(cardSelected);
    }

    resetCards() {
        this.cardViews.forEach(cardView => {
            cardView.reset();
        });
    }

}

customElements.define('play-view', PlayView);