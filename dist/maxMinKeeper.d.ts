import { SlidingWindowArr } from './slidingWindowArr';
export declare class MaxMinKeeper {
    maxLen: number;
    valuesArr: SlidingWindowArr<number>;
    maxArr: any;
    minArr: any;
    constructor(props: {
        period: number;
    });
    private addTail;
    private removeHead;
    add(value: number): void;
    getLen(): number;
    getMax(): any;
    getMin(): any;
    getMaxLen(): number;
    debug(): void;
}
