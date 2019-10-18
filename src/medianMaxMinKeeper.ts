import { SlidingWindowArr } from './slidingWindowArr';
const Heap = require('collections/heap');

export class MedianMaxMinKeeper {
  maxLen: number;
  valuesArr: SlidingWindowArr;
  maxHeap = new Heap();
  minHeap = new Heap([], null, (a: number, b: number) => b - a);

  constructor(props: { periods: number }) {
    this.maxLen = props.periods;
    this.valuesArr = new SlidingWindowArr({ maxLen: this.maxLen });
  }

  add(value: number) {
    let success = true;
    if (this.valuesArr.length() == this.maxLen) {
      // need to remove the old value first.
      const firstVal = this.valuesArr.first()!;
      let deleted = false;
      if (firstVal <= this.maxHeap.peek()) {
        deleted = this.maxHeap.delete(firstVal);
      }
      if (firstVal >= this.minHeap.peek() && !deleted) {
        deleted = deleted || this.minHeap.delete(firstVal);
      }
      if (!deleted) {
        console.error(
          `failed to delete from heap value=${value} firstVal=${firstVal} maxHeap=${this.maxHeap.peek()} minHeap=${this.minHeap.peek()} arrLen=${this.valuesArr.length()} maxLen=${
            this.maxLen
          }`,
        );
        success = false;
      }
    }

    this.valuesArr.push(value);
    if (this.maxHeap.length === 0 || value <= this.maxHeap.peek()) {
      this.maxHeap.push(value);
    } else {
      this.minHeap.push(value);
    }

    while (this.maxHeap.length - this.minHeap.length > 1) {
      // shift from maxHeap to min Heap
      this.minHeap.push(this.maxHeap.pop());
    }

    while (this.minHeap.length - this.maxHeap.length > 1) {
      // shift from maxHeap to min Heap
      this.maxHeap.push(this.minHeap.pop());
    }
    return success;
  }

  getMedian() {
    if (this.minHeap.length === 0) return this.maxHeap.peek();
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }

  getMaxLen() {
    return this.maxLen;
  }

  getMax() {
    return this.maxHeap.peek();
  }

  getMin() {
    return this.minHeap.peek();
  }

  debug() {
    console.log(
      `maxHeap=${this.maxHeap.peek()} minHeap=${this.minHeap.peek()} maxHeapLen=${this.maxHeap.length} minHeapLen=${
        this.minHeap.length
      }`,
    );
  }
}
