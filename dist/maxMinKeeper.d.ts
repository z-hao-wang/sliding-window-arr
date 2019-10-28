import { SlidingWindowArr } from './slidingWindowArr';
export declare class MaxMinKeeper {
    maxLen: number;
    valuesArr: SlidingWindowArr;
    maxArr: SlidingWindowArr;
    minArr: SlidingWindowArr;
    protected currentMax: number;
    protected currentMin: number;
    constructor(props: {
        period: number;
    });
    add(value: number): void;
    getMax(): number | undefined;
    getMin(): number | undefined;
    getMaxLen(): number;
    debug(): void;
}
