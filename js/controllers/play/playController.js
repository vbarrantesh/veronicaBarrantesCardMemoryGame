import { Controller } from "../controller.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new PlayView(parent, this);
    }
}