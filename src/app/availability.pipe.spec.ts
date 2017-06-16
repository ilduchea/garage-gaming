import { availabilityPipe } from './availability.pipe';

describe('availabilityPipe', () => {
  it('create an instance', () => {
    const pipe = new availabilityPipe();
    expect(pipe).toBeTruthy();
  });
});
