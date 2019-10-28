import { SlidingWindowArr } from './slidingWindowArr';
const Deque = require('collections/deque');

// algorithm source https://www.nayuki.io/page/sliding-window-minimum-maximum-algorithm
// https://www.nayuki.io/res/sliding-window-minimum-maximum-algorithm/slidingwindowminmax.py
export class MaxMinKeeper {
  maxLen: number;
  valuesArr: SlidingWindowArr<number>;
  maxArr: any;
  minArr: any;

  constructor(props: { period: number }) {
    this.maxLen = props.period;
    this.valuesArr = new SlidingWindowArr<number>({ maxLen: this.maxLen });
    this.maxArr = new Deque([]);
    this.minArr = new Deque([]);
  }

  private addTail(value: number) {
    while (this.minArr.length > 0 && value < this.minArr[this.minArr.length - 1]) {
      this.minArr.pop();
    }
    this.minArr.push(value);
    while (this.maxArr.length > 0 && value > this.maxArr[this.maxArr.length - 1]) {
      this.maxArr.pop();
    }
    this.maxArr.push(value);
  }

  private removeHead(value: number) {
    if (value < this.minArr.peek()) {
      throw new Error(`wrong minArr value ${value}`);
    } else if (value === this.minArr.peek()) {
      this.minArr.shift();
    }

    if (value > this.maxArr.peek()) {
      throw new Error(`wrong maxArr value ${value}`);
    } else if (value === this.maxArr.peek()) {
      this.maxArr.shift();
    }
  }

  add(value: number) {
    if (this.valuesArr.length() === this.maxLen) {
      this.removeHead(this.valuesArr.first()!);
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
