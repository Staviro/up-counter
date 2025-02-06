'use strict'
/**
 * Joseph Morukhuladi
 */
class Counter {
    constructor(options) {
        this.options = options;
        return this;
    }

    incrementor(perc, def) {
        if (perc >= 99) {
            return 2;
        } else if (perc >= 98) {
            return 4;
        } else if (perc >= 95) {
            return 8;
        } else if (perc >= 92) {
            return 12;
        } else {
            return def;
        }
    }

    start() {
        let el = this.options.element;
        if (typeof(el) === "null" || typeof(el) === "undefined") return console.error("Element does not exist");
        let current = 0;
        this.interval = this._normal(this, current, el);
        return this;
    }

    _normal(instance, current, el) {
        return setInterval(function() {
            let percentage = Math.floor((current / instance.options.to)  * 100);
            let increment = instance.incrementor(percentage, instance.options.i);
            let increaseBy = Math.floor(Math.random() * increment);
            let futureValue = current + increaseBy;
            if (futureValue >= instance.to) current = instance.to
            else current = futureValue;
            if (current >= instance.to || percentage == 100) {
                el.textContent = instance.options.to;
                clearInterval(instance.interval);
                instance.options.current = current;
                return;
            }
            el.textContent = current;
        }, instance.options.gap);
    }
}