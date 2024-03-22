export class Controller {
    constructor() {
        this.view = null;
        this.service = null;
    }

    show() {};
    hide() {};

    delete() {
        this.view.delete();
    }

}