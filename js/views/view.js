import { div } from "../libs/html.js";

export class View {
    constructor(parent, controller = null) {
        this.parent = parent;
        this.controller = controller;
        this.containers = div({}, this.parent);

    }
}