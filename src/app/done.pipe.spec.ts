import { DonePipe } from './done.pipe';

describe('DonePipe', () => {
  it('create an instance', () => {
    const pipe = new DonePipe();
    expect(pipe).toBeTruthy();
  });
});
