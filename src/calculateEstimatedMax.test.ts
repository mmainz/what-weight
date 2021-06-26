import {
  calculateEstimatedMax,
  RepetitionCount,
  RPE,
} from './calculateEstimatedMax';

const testValues: [number, RepetitionCount, RPE, number][] = [
  [200, 10, 10, 271.96475996019575],
  [200, 9, 10, 262.43686769669597],
  [200, 8, 10, 253.55397081952492],
  [200, 7, 10, 245.2527186821271],
  [200, 6, 10, 237.47779392724624],
  [200, 5, 10, 230.1806782696082],
  [200, 4, 10, 223.31863904207688],
  [200, 3, 10, 216.85389176982997],
  [200, 2, 10, 210.75290410583298],
  [200, 1, 9.5, 207.91322458054202],
  [100, 9, 9, 136.12608759072157],
  [152.5, 7, 8, 200.51664829399965],
  [60, 4, 7.5, 72.56070736917255],
  [70, 3, 6, 86.16657586502888],
  [180, 2, 7, 207.71940240456934],
  [250, 1, 9.5, 259.8915307256775],
];

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
