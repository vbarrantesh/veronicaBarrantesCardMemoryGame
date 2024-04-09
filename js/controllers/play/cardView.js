import { BaseView } from "../../views/baseView.js";

export class CardView extends BaseView {
    constructor(parent, card, callback = null) {
        super(parent);
        this.card = card;
        this.className = "cardView"
        this.onclick = () => {
            if (callback !== null) {
                this.card.isSelected = true;
                callback(this.card);
            }
        }

        window.addEventListener('show-card', (event) => {
            if (this.card.isSelected) {
                this.show();
            }
        });
    }

    show() {
        gsap.to(this, { scale: 1.1, duration: 0.15, ease: "expo.in", yoyo: true, repeat: 1 });
        this.innerHTML = this.card.emoji;
    }

    hide() {
        this.card.isSelected = false;
        this.innerHTML = '';
    }

    reset() {
        if (this.card.isDiscovered) {
            this.classList.add('cardView-isDiscovered');
        } else {
            this.hide();
        }
    }
}

customElements.define('card-view', CardView);