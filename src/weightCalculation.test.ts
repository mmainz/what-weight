import {
  calculateEstimatedMax,
  calculateTargetWeight,
  RepetitionCount,
  RPE,
} from './weightCalculation';

const testValues: [number, RepetitionCount, RPE, number][] = [
  [200, 10, 10, 270.6359945872801],
  [200, 9, 10, 262.4671916010499],
  [200, 8, 10, 254.45292620865138],
  [200, 7, 10, 246.60912453760787],
  [200, 6, 10, 238.94862604540026],
  [200, 5, 10, 231.7497103128621],
  [200, 4, 10, 224.2152466367713],
  [200, 3, 10, 216.91973969631235],
  [200, 2, 10, 209.4240837696335],
  [200, 1, 9.5, 204.60358056265983],
  [100, 9, 9, 135.31799729364005],
  [152.5, 7, 8, 200.13123359580052],
  [60, 4, 7.5, 72.81553398058253],
  [70, 3, 6, 86.31319358816276],
  [180, 2, 7, 208.5747392815759],
  [250, 1, 9.5, 255.7544757033248],
];

describe('weightCalculation', () => {
  describe('calculateEstimatedMax', () => {
    test.each(testValues)(
      '%f kg for %i reps at %f RPE results in %i max',
      (weight, reps, rpe, max) =>
        expect(calculateEstimatedMax(weight, reps, rpe)).toEqual(max),
    );

    it('returns the lifted weight when reps is one and RPE is ten', () => {
      expect(calculateEstimatedMax(200, 1, 10)).toEqual(200);
    });
  });

  describe('calculateTargetWeight', () => {
    it('calculates the target weight given 1RM, target reps and target RPE', () => {
      expect(calculateTargetWeight(250, 2, 8)).toEqual(223);
    });
  });
});
