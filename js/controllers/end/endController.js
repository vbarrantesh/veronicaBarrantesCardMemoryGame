import { Controller } from "../controller.js";
import { EndService } from "./endService.js";
import { EndView } from "./endView.js";

export class EndController extends Controller {
    constructor(parent, score) {
        super(parent);
        this.view = new EndView(parent, this, score);
        this.service = new EndService(this, score);
    }
    saveDifficulty(difficulty) {
        localStorage.setItem("difficulty", difficulty);
    }
}