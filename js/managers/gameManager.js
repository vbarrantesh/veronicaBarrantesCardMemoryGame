import { div } from "../libs/html.js";
import { LoadingController } from "../controllers/loading/loadingController.js";
import { BaseView } from "../views/baseView.js";
import { LoadingView } from "../controllers/loading/loadingView.js";

export class GameManager {

    constructor() {
        this.mainContainer = div({ className: 'mainContainer' }, document.body);
        this.currentController = new LoadingController(this.mainContainer);



    }

}