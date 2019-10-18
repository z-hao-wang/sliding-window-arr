import { MedianKeeper } from '../medianKeeper';
describe('MedianKeeper', () => {
  it('should work', () => {
    const m = new MedianKeeper({ period: 6 });
    m.add(10);
    expect(m.getMedian()).toBe(10);
    m.add(11);
    expect(m.getMedian()).toBe(10.5);
    m.add(9);
    expect(m.getMedian()).toBe(10.5);
    m.add(12);
    expect(m.getMedian()).toBe(10.5);
    m.add(12);
    m.add(12);
    expect(m.getMedian()).toBe(11.5);
    m.add(4);
    expect(m.getMedian()).toBe(11.5);
    m.add(22);
    m.add(5);
    expect(m.getMedian()).toBe(12);
  });
});
