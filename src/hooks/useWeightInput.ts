import { useState } from 'react';
import { Props } from '../components/NumberInput';

export type UseWeightInputReturn = {
  weightInputProps: Props;
  weight: number | null;
};

const minWeight = 1;

export const useWeightInput = (initialValue = ''): UseWeightInputReturn => {
  const [value, setValue] = useState(initialValue);
  const weight = parseFloat(value) || null;
  const onChange: Props['onChange'] = (str) => {
    const newWeight = parseFloat(str);
    if (newWeight <= minWeight) return setValue(minWeight.toString());
    setValue(str);
  };
  const onIncrement = () => {
    const weightOrZero = weight || 0;
    const weightRest = weightOrZero % 2.5;
    const newWeight =
      weightRest === 0 ? weightOrZero + 2.5 : weightOrZero + 2.5 - weightRest;
    setValue(newWeight.toString());
  };
  const onDecrement = () => {
    const weightOrZero = weight || 0;
    const weightRest = weightOrZero % 2.5;
    const newWeight =
      weightRest === 0 ? weightOrZero - 2.5 : weightOrZero - weightRest;
    if (newWeight <= minWeight) return setValue(minWeight.toString());
    setValue(newWeight.toString());
  };
  const weightInputProps = {
    value,
    onChange,
    onIncrement,
    onDecrement,
    precision: 1,
    step: 2.5,
  };

  return { weightInputProps, weight };
};
