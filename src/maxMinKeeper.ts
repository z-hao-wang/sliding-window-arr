import { SlidingWindowArr } from './slidingWindowArr';
const Heap = require('collections/heap');

export class MaxMinKeeper {
  maxLen: number;
  valuesArr: SlidingWindowArr;
  maxHeap = new Heap();
  minHeap = new Heap([], null, (a: number, b: number) => b - a);

  constructor(props: { period: number }) {
    this.maxLen = props.period;
    this.valuesArr = new SlidingWindowArr({ maxLen: this.maxLen });
  }

  add(value: number) {
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
    console.log(
      `maxHeap=${this.maxHeap.peek()} minHeap=${this.minHeap.peek()} maxHeapLen=${this.maxHeap.length} minHeapLen=${
        this.minHeap.length
      }`,
    );
  }
}
