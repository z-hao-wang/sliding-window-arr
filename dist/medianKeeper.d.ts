import { SlidingWindowArr } from './slidingWindowArr';
export declare class MedianKeeper {
    maxLen: number;
    valuesArr: SlidingWindowArr;
    maxHeap: any;
    minHeap: any;
    constructor(props: {
        period: number;
    });
    add(value: number): boolean;
    getMedian(): any;
    getMaxLen(): number;
    debug(): void;
}
