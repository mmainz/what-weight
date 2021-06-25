import { useState } from 'react';
import { Props } from '.';

export type UseRepsInputReturn = { repsInputProps: Props; reps: number | null };

const minReps = 1;
const maxReps = 10;

export const useRepsInput = (initialValue = ''): UseRepsInputReturn => {
  const [value, setValue] = useState(initialValue);
  const reps = parseInt(value) || null;
  const onChange: Props['onChange'] = (str) => {
    const newReps = parseInt(str);
    if (newReps >= maxReps) return setValue(maxReps.toString());
    if (newReps <= minReps) return setValue(minReps.toString());
    setValue(str);
  };
  const onIncrement = () => {
    const newReps = (reps || 0) + 1;
    if (newReps >= maxReps) return setValue(maxReps.toString());
    setValue(newReps.toString());
  };
  const onDecrement = () => {
    const newReps = (reps || 2) - 1;
    if (newReps <= minReps) return setValue(minReps.toString());
    setValue(newReps.toString());
  };
  const props = { value, onChange, onIncrement, onDecrement };

  return { repsInputProps: props, reps };
};
