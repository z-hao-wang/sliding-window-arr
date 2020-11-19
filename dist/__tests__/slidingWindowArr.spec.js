"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slidingWindowArr_1 = require("../slidingWindowArr");
describe('slidingWindowArr', function () {
    it('should work', function () {
        const a1 = new slidingWindowArr_1.SlidingWindowArr({
            maxLen: 2,
        });
        a1.push(1);
        expect(a1.get(0)).toEqual(1);
        expect(a1.first()).toEqual(1);
        expect(a1.last()).toEqual(1);
        a1.push(2);
        expect(a1.get(0)).toEqual(1);
        expect(a1.get(1)).toEqual(2);
        expect(a1.first()).toEqual(1);
        expect(a1.last()).toEqual(2);
        a1.push(3);
        expect(a1.get(0)).toEqual(2);
        expect(a1.get(1)).toEqual(3);
        expect(a1.first()).toEqual(2);
        expect(a1.last()).toEqual(3);
        a1.push(4);
        expect(a1.get(0)).toEqual(3);
        expect(a1.get(1)).toEqual(4);
        expect(a1.get(-1)).toEqual(4);
        expect(a1.first()).toEqual(3);
        expect(a1.last()).toEqual(4);
    });
    it('findIndex should work', function () {
        const a1 = new slidingWindowArr_1.SlidingWindowArr({
            maxLen: 3,
        });
        a1.push(1);
        a1.push(3);
        a1.push(2);
        expect(a1.findIndex(x => x === 1)).toBe(0);
        expect(a1.findIndex(x => x === 3)).toBe(1);
        expect(a1.findIndex(x => x === 8)).toBe(-1);
        a1.push(4);
        expect(a1.findIndex(x => x === 1)).toBe(-1);
        expect(a1.findIndex(x => x === 3)).toBe(0);
    });
});
