export class LoadingService {
    constructor(controller) {
        this.controller = controller;
        this.getInitialData();
    }

    getInitialData() {
        window.setTimeout(() => {
            let event = new CustomEvent('loading-completed', {
                detail: {
                    state: 'state'
                },
                bubbles: true,
                cancelable: true,
                composed: false
            });
            this.controller.view.dispatchEvent(event);
        }, 1000);
    }
}