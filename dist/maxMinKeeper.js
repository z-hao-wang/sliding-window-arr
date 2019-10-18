"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slidingWindowArr_1 = require("./slidingWindowArr");
const Heap = require('collections/heap');
class MaxMinKeeper {
    constructor(props) {
        this.maxHeap = new Heap();
        this.minHeap = new Heap([], null, (a, b) => b - a);
        this.maxLen = props.period;
        this.valuesArr = new slidingWindowArr_1.SlidingWindowArr({ maxLen: this.maxLen });
    }
    add(value) {
        // delete old values first
        if (this.valuesArr.length() == this.maxLen) {
            this.maxHeap.delete(this.valuesArr.first());
            this.minHeap.delete(this.valuesArr.first());
        }
        this.valuesArr.push(value);
        this.maxHeap.push(value);
        this.minHeap.push(value);
    }
    getMax() {
        return this.maxHeap.peek();
    }
    getMin() {
        return this.minHeap.peek();
    }
    getMaxLen() {
        return this.maxLen;
    }
    debug() {
        console.log(`maxHeap=${this.maxHeap.peek()} minHeap=${this.minHeap.peek()} maxHeapLen=${this.maxHeap.length} minHeapLen=${this.minHeap.length}`);
    }
}
exports.MaxMinKeeper = MaxMinKeeper;
