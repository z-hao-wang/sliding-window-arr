import { SlidingWindowArr } from './slidingWindowArr';

export class MaxMinKeeper {
  maxLen: number;
  valuesArr: SlidingWindowArr;
  maxArr: SlidingWindowArr;
  minArr: SlidingWindowArr;

  protected currentMax = 0;
  protected currentMin = Number.MAX_SAFE_INTEGER;

  constructor(props: { period: number }) {
    this.maxLen = props.period;
    this.valuesArr = new SlidingWindowArr({ maxLen: this.maxLen });
    this.maxArr = new SlidingWindowArr({ maxLen: this.maxLen });
    this.minArr = new SlidingWindowArr({ maxLen: this.maxLen });
  }

  add(value: number) {
    if (this.valuesArr.length() === 0) {
      this.currentMin = this.currentMax = value;
    } else {
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
