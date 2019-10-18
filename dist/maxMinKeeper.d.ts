import { SlidingWindowArr } from './slidingWindowArr';
export declare class MaxMinKeeper {
    maxLen: number;
    valuesArr: SlidingWindowArr;
    maxHeap: any;
    minHeap: any;
    constructor(props: {
        period: number;
    });
    add(value: number): void;
    getMax(): any;
    getMin(): any;
    getMaxLen(): number;
    debug(): void;
}
