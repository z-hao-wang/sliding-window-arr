import { SlidingWindowArr } from './slidingWindowArr';
export declare class MedianMaxMinKeeper {
    maxLen: number;
    valuesArr: SlidingWindowArr;
    maxHeap: any;
    minHeap: any;
    constructor(props: {
        periods: number;
    });
    add(value: number): boolean;
    getMedian(): any;
    getMaxLen(): number;
    getMax(): any;
    getMin(): any;
    debug(): void;
}
