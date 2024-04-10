import { div, h1, span, img } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";

export class CreditsView extends BaseView {
    constructor(parent, controller) {
        super(parent, controller);

        this.className = "creditsView";

        let logo = div({ className: 'creditsView-logo' }, this);

        span({ className: 'creditsVIew-lbl', innerHTML: 'Estudiante' }, this);

        span({ className: 'creditsVIew-info', innerHTML: 'Verónica Barrantes Hernández' }, this);

        span({ className: 'creditsVIew-lbl', innerHTML: 'Curso' }, this);

        span({ className: 'creditsVIew-info', innerHTML: 'Programación Orientada a Objetos' }, this);

        span({ className: 'creditsVIew-lbl', innerHTML: 'Profesor' }, this);

        span({ className: 'creditsVIew-info', innerHTML: 'Esteban Padilla Sánchez' }, this);





    }
}
customElements.define('credits-view', CreditsView);