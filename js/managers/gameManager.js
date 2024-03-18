import { LoadingController } from "../controllers/loading/loadingController.js";

export class GameManager {
    contructor() {
        this.currentController = new LoadingController(document.body);
    }
}