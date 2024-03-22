export class LoadingService {
    constructor(contoller) {
        this.contoller = contoller;
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
            this.contoller.view.dispatchEvent(event);
        }, 3000);
    }
}