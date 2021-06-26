export const calculateEstimatedMax = (weight, reps, rpe) => {
  const repsConsideringRpe = reps + 10 - rpe;
  return weight * (1 + repsConsideringRpe / 30);
};
