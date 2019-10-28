"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slidingWindowArr_1 = require("./slidingWindowArr");
const Deque = require('collections/deque');
// algorithm source https://www.nayuki.io/page/sliding-window-minimum-maximum-algorithm
// https://www.nayuki.io/res/sliding-window-minimum-maximum-algorithm/slidingwindowminmax.py
class MaxMinKeeper {
    constructor(props) {
        this.maxLen = props.period;
        this.valuesArr = new slidingWindowArr_1.SlidingWindowArr({ maxLen: this.maxLen });
        this.maxArr = new Deque([]);
        this.minArr = new Deque([]);
    }
    addTail(value) {
        while (this.minArr.length > 0 && value < this.minArr[this.minArr.length - 1]) {
            this.minArr.pop();
        }
        this.minArr.push(value);
        while (this.maxArr.length > 0 && value > this.maxArr[this.maxArr.length - 1]) {
            this.maxArr.pop();
        }
        this.maxArr.push(value);
    }
    removeHead(value) {
        if (value < this.minArr.peek()) {
            throw new Error(`wrong minArr value ${value}`);
        }
        else if (value === this.minArr.peek()) {
            this.minArr.shift();
        }
        if (value > this.maxArr.peek()) {
            throw new Error(`wrong maxArr value ${value}`);
        }
        else if (value === this.maxArr.peek()) {
            this.maxArr.shift();
        }
    }
    add(value) {
        if (this.valuesArr.length() === this.maxLen) {
            this.removeHead(this.valuesArr.first());
        }
        this.addTail(value);
        this.valuesArr.push(value);
    }
    getMax() {
        return this.maxArr.peek();
    }
    getMin() {
        return this.minArr.peek();
    }
    getMaxLen() {
        return this.maxLen;
    }
    debug() {
        console.log(`max=${this.getMax()} getMin=${this.getMin()}`);
    }
}
exports.MaxMinKeeper = MaxMinKeeper;
