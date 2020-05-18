export declare namespace SlidingWindowArr {
    interface Options {
        maxLen: number;
    }
}
export declare class SlidingWindowArr<T = number> {
    private arr;
    private maxLen;
    private cursor;
    constructor(options: SlidingWindowArr.Options);
    map<RET_T = number>(func: (value: T, index: number) => RET_T): any[];
    setMaxLen(maxLen: number): void;
    toUnorderedArr(): T[];
    toOrderedArr(): any[];
    getMaxLen(): number;
    push(val: T): void;
    get(i: number): T;
    set(i: number, item: T): void;
    first(): T | undefined;
    last(): T | undefined;
    findIndex(prediction: (x: T) => boolean): number;
    length(): number;
    isFull(): boolean;
}
