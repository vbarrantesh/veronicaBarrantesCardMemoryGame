import { Controller } from "../controller.js";
import { ScoresView } from "./scoresView.js";

export class ScoresController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new ScoresView(parent, this);
    }
}