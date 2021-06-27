import {useState} from "../../_snowpack/pkg/react.js";
const minWeight = 1;
export const useWeightInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const weight = parseFloat(value) || null;
  const onChange = (str) => {
    const newWeight = parseFloat(str);
    if (newWeight <= minWeight)
      return setValue(minWeight.toString());
    setValue(str);
  };
  const onIncrement = () => {
    const weightOrZero = weight || 0;
    const weightRest = weightOrZero % 2.5;
    const newWeight = weightRest === 0 ? weightOrZero + 2.5 : weightOrZero + 2.5 - weightRest;
    setValue(newWeight.toString());
  };
  const onDecrement = () => {
    const weightOrZero = weight || 0;
    const weightRest = weightOrZero % 2.5;
    const newWeight = weightRest === 0 ? weightOrZero - 2.5 : weightOrZero - weightRest;
    if (newWeight <= minWeight)
      return setValue(minWeight.toString());
    setValue(newWeight.toString());
  };
  const weightInputProps = {
    value,
    onChange,
    onIncrement,
    onDecrement,
    precision: 0,
    step: 2.5
  };
  return {weightInputProps, weight};
};
