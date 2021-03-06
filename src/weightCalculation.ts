export const rpes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10] as const;
export type RPE = typeof rpes[number];
export const isRpe = (value: unknown): value is RPE =>
  rpes.includes(value as RPE);

export const repetitions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
export type RepetitionCount = typeof repetitions[number];
export const isRepetitionCount = (value: unknown): value is RepetitionCount =>
  repetitions.includes(value as RepetitionCount);

const rpeData: Record<RPE, number[]> = {
  10: [1, 0.955, 0.922, 0.892, 0.863, 0.837, 0.811, 0.786, 0.762, 0.739],
  9.5: [
    0.9775, 0.9385, 0.907, 0.8775, 0.85, 0.824, 0.7985, 0.774, 0.7505, 0.723,
  ],
  9: [0.955, 0.922, 0.892, 0.863, 0.837, 0.811, 0.786, 0.762, 0.739, 0.707],
  8.5: [
    0.9385, 0.907, 0.8775, 0.85, 0.824, 0.7985, 0.774, 0.7505, 0.723, 0.6935,
  ],
  8: [0.922, 0.892, 0.863, 0.837, 0.811, 0.786, 0.762, 0.739, 0.707, 0.68],
  7.5: [
    0.907, 0.8775, 0.85, 0.824, 0.7985, 0.774, 0.7505, 0.723, 0.6935, 0.6665,
  ],
  7: [0.892, 0.863, 0.837, 0.811, 0.786, 0.762, 0.739, 0.707, 0.68, 0.653],
  6.5: [
    0.8775, 0.85, 0.824, 0.7985, 0.774, 0.7505, 0.723, 0.6935, 0.6665, 0.6395,
  ],
  6: [0.863, 0.837, 0.811, 0.786, 0.762, 0.739, 0.707, 0.68, 0.653, 0.626],
};

export const calculateEstimatedMax = (
  weight: number,
  reps: RepetitionCount,
  rpe: RPE,
): number => {
  if (reps === 1 && rpe === 10) return weight;

  const percentage = rpeData[rpe][reps - 1];
  return weight / percentage;
};

export const calculateTargetWeight = (
  max: number,
  reps: RepetitionCount,
  rpe: RPE,
): number => 2.5 * Math.ceil((max * rpeData[rpe][reps - 1]) / 2.5);
