class LiveTimer extends TimeFormatted {

    constructor() {
        super();
        setTimeout(() => {
            this.setAttribute('hour', 'numeric');
            this.setAttribute('minute', 'numeric');
            this.setAttribute('second', 'numeric');
        })
    }

    connectedCallback() {
        this.timerId = setInterval(() => {
            super.render();
            this.dispatchEvent(new CustomEvent('tick', {
                detail: `${Date.now()}`
            }));
        }, 1000);
    }
  
    disconnectedCallback() {
        clearInterval(this.timerId);
    }
}
  
  customElements.define("live-timer", LiveTimer);