export const calculateEstimatedMax = (
  weight: number,
  reps: number,
  rpe: number,
): number => {
  const repsConsideringRpe = reps + 10 - rpe;
  return weight * (1 + repsConsideringRpe / 30);
};
