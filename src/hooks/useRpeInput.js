import {useState} from "../../_snowpack/pkg/react.js";
const minRpe = 6;
const maxRpe = 10;
export const useRpeInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const rpe = parseFloat(value) || null;
  const onChange = (str) => {
    const newRpe = parseInt(str);
    if (newRpe >= maxRpe)
      return setValue(maxRpe.toString());
    if (newRpe <= minRpe)
      return setValue(minRpe.toString());
    setValue(str);
  };
  const onIncrement = () => {
    const newRpe = (rpe || 5.5) + 0.5;
    if (newRpe >= maxRpe)
      return setValue(maxRpe.toString());
    setValue(newRpe.toString());
  };
  const onDecrement = () => {
    const newReps = (rpe || 6.5) - 0.5;
    if (newReps <= minRpe)
      return setValue(minRpe.toString());
    setValue(newReps.toString());
  };
  const rpeInputProps = {
    value,
    onChange,
    onIncrement,
    onDecrement,
    precision: 1,
    step: 0.5
  };
  return {rpeInputProps, rpe};
};