"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slidingWindowArr_1 = require("./slidingWindowArr");
class MaxMinKeeper {
    constructor(props) {
        this.currentMax = 0;
        this.currentMin = Number.MAX_SAFE_INTEGER;
        this.maxLen = props.period;
        this.valuesArr = new slidingWindowArr_1.SlidingWindowArr({ maxLen: this.maxLen });
        this.maxArr = new slidingWindowArr_1.SlidingWindowArr({ maxLen: this.maxLen });
        this.minArr = new slidingWindowArr_1.SlidingWindowArr({ maxLen: this.maxLen });
    }
    add(value) {
        if (this.valuesArr.length() === 0) {
            this.currentMin = this.currentMax = value;
        }
        else {
            this.currentMax = Math.max(this.currentMax, value);
            this.currentMin = Math.min(this.currentMin, value);
        }
        this.valuesArr.push(value);
        this.maxArr.push(this.currentMax);
        this.minArr.push(this.currentMin);
    }
    getMax() {
        return this.maxArr.last();
    }
    getMin() {
        return this.minArr.last();
    }
    getMaxLen() {
        return this.maxLen;
    }
    debug() {
        console.log(`max=${this.getMax()} getMin=${this.getMin()}`);
    }
}
exports.MaxMinKeeper = MaxMinKeeper;
