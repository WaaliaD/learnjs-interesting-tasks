"use strict"

class Clock {
    constructor({ template }) {
        this.template = template
    }

    render(temp) {
        let date = new Date();

        let output = temp
            .replace('h', (date.getHours() < 10) ? '0' + date.getHours() : date.getHours())
            .replace('m', (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes())
            .replace('s', (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render(this.template)
        this.timer = setInterval(() => this.render(this.template), 1000);
    }

}

let clock = new Clock({template: 'h:m:s'});
clock.start();