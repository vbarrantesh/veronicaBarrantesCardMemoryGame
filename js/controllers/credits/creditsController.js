import { Controller } from "../controller.js";
import { CreditsView } from "./creditsView.js";

export class CreditsController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new CreditsView(parent, this);
    }
}