import { Controller } from "../controller.js";
import { ScoresService } from "./scoreService.js";
import { ScoresView } from "./scoresView.js";

export class ScoresController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new ScoresView(parent, this);
        this.service = new ScoresService(this)
    }

    showScores(scores) {
        this.view.showScores(scores);

    }
}