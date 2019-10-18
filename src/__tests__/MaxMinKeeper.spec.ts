import { MaxMinKeeper } from '../maxMinKeeper';
describe('MaxMinKeeper', () => {
  it('should work', () => {
    const m = new MaxMinKeeper({ period: 6 });
    m.add(10);
    expect(m.getMax()).toBe(10);
    expect(m.getMin()).toBe(10);
    m.add(11);
    expect(m.getMax()).toBe(11);
    expect(m.getMin()).toBe(10);
    m.add(9);
    expect(m.getMax()).toBe(11);
    expect(m.getMin()).toBe(9);
  });
});
