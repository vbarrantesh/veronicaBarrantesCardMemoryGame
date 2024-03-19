import { Controller } from "../controller.js";
import { LoadingView } from "./loadingView.js";

export class LoadingController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new LoadingView(parent);
        this.view.className = 'loadingController';


    }
}