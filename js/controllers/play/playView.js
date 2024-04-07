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
        /* showCards(cards) {
             cards.forEach(card => {
                 this.cardViews.push(new CardView(this.cardsContainer, card, this.onCardSelected.bind(this)));
             });
         }*/

    showCards(cards) {
        const cardsPerRow = 4;
        let currentRow;

        // Eliminar cualquier contenido previo en el contenedor
        this.cardsContainer.innerHTML = '';

        // Iterar sobre todas las tarjetas y agruparlas en filas
        cards.forEach((card, index) => {
            if (index % cardsPerRow === 0) {
                // Comenzar una nueva fila
                currentRow = div({ className: 'playView-cardRow' });
                this.cardsContainer.appendChild(currentRow);
            }
            // Crear una instancia de CardView para representar la tarjeta
            const cardView = new CardView(currentRow, card, this.onCardSelected.bind(this));
            // Agregar la vista de la tarjeta al arreglo cardViews
            this.cardViews.push(cardView);
        });
    }

    onCardSelected() {
        this.controller.onCardSelection();
    }

    resetCards() {
        this.cardViews.forEach(cardView => {
            cardView.reset();
        });
    }

}

customElements.define('play-view', PlayView);