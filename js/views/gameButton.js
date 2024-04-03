import { BaseView } from "./baseView.js";

export class GameButton extends BaseView {
    constructor(parent, title, callback) {
        super(parent);
        this.className = "gameButton"
        this.innerHTML = title;
        this.onclick = () => {
            gsap.to(this, { scale: 1.1, duration: 0.15, ease: "expo.in", yoyo: true, repeat: 1 });
            callback();
        }
    }
}
customElements.define('game-button', GameButton);