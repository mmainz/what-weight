import {useState} from "../../_snowpack/pkg/react.js";
import {isRepetitionCount} from "../calculateEstimatedMax.js";
const minReps = 1;
const maxReps = 10;
export const useRepsInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const parsedValue = parseInt(value) || null;
  const reps = isRepetitionCount(parsedValue) ? parsedValue : null;
  const onChange = (str) => {
    const newReps = parseInt(str);
    if (newReps >= maxReps)
      return setValue(maxReps.toString());
    if (newReps <= minReps)
      return setValue(minReps.toString());
    setValue(str);
  };
  const onIncrement = () => {
    const newReps = (reps || 0) + 1;
    if (newReps >= maxReps)
      return setValue(maxReps.toString());
    setValue(newReps.toString());
  };
  const onDecrement = () => {
    const newReps = (reps || 2) - 1;
    if (newReps <= minReps)
      return setValue(minReps.toString());
    setValue(newReps.toString());
  };
  const repsInputProps = {
    value,
    onChange,
    onIncrement,
    onDecrement,
    precision: 0,
    step: 1
  };
  return {repsInputProps, reps};
};
