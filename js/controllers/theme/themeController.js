import { Controller } from "../controller.js";
import { ThemeView } from "./themeView.js";

export class ThemeController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new ThemeView(parent, this);
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }
}