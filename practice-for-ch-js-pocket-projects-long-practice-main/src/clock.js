import * as warmUp from "./warmup.js";

class Clock {
    constructor() {
        let date = new Date();
        this.hour = date.getHours();
        this.min = date.getMinutes();
        this.sec = date.getSeconds();
        const el = document.querySelector("#clock");
        
        setInterval(() => {
            this.tick();
            warmUp.htmlGenerator(`${this.hour}:${this.min}:${this.sec}`, el);
        }, 1000)
    }
    tick() {
        if (this.sec === 59) {
            if(this.min === 59) {
                if (this.hour === 23) {
                    this.hour = 0;
                    this.sec = 0;
                    this.min = 0;
                } else {
                    this.hour += 1;
                    this.min = 0;
                    this.sec = 0;
                }
            } else {
                this.min += 1;
                this.sec = 0;
            }
        } else {
        this.sec += 1;
        }
    }
}

export default Clock;