import { LoadingController } from "../controllers/loading/loadingController.js";

import class GameManager {
    contructor() {
        this.currentController = new LoadingController(document.body);
    }
}