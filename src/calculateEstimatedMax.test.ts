import { calculateEstimatedMax } from './calculateEstimatedMax';

describe('calculateEstimatedMax', () => {
  it('calculates the estimated 1RM', () => {
    expect(calculateEstimatedMax(200, 2, 10)).toEqual(213.33333333333334);
  });
});
