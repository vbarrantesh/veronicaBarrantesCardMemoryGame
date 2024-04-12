import { Controller } from "../controller.js";
import { DifficultyView } from "./difficultyView.js";

export class DifficultyController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new DifficultyView(parent, this);
    }

    saveDifficulty(difficulty) {
        localStorage.setItem('difficulty', difficulty);
    }

}