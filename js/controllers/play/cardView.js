import { BaseView } from "../../views/baseView.js";

export class CardView extends BaseView {
    constructor(parent, card, callback = null) {
        super(parent);
        this.card = card;
        this.className = "cardView";
        this.didShowDiscoverAnimation = false;

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
        gsap.to(this, {
            rotationY: 180,
            duration: 0.5,
            ease: "expo.in",
            onComplete: () => {
                this.innerHTML = this.card.emoji;
            }
        });
    }

    hide() {
        this.card.isSelected = false;
        gsap.to(this, {
            rotationY: 0,
            duration: 0.5,
            ease: "expo.in",
            onComplete: () => {

                this.innerHTML = '';
            }

        });

    }

    reset() {

        if (this.card.isDiscovered) {
            if (this.didShowDiscoverAnimation) return;
            this.didShowDiscoverAnimation = true;

            gsap.to(this, { duration: 0.1, ease: "bounce.out", scale: 1.1, yoyo: true, repeat: 5 });

            this.classList.add('cardView-isDiscovered');
        } else {
            this.hide();
        }
    }

    playHappy() {

        if (this.card.isDiscovered) {
            gsap.to(this, { duration: 0.1, ease: "bounce.out", scale: 1.1, yoyo: true, repeat: 5 });
        }
    }
}

customElements.define('card-view', CardView);