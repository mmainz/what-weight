import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import React from 'react';

export type Props = {
  weight?: number;
  onWeightChanged: (weight?: number) => void;
};

export const WeightInput: React.FC<Props> = ({ weight, onWeightChanged }) => {
  const { getInputProps } = useNumberInput({
    precision: 1,
    step: 2.5,
    value: weight,
    min: 0,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (isNaN(value)) return onWeightChanged(undefined);
    return onWeightChanged(value);
  };

  const onIncrement = () => {
    const weightOrZero = weight || 0;
    const weightRest = weightOrZero % 2.5;
    if (weightRest === 0) {
      onWeightChanged(weightOrZero + 2.5);
    } else {
      onWeightChanged(weightOrZero + 2.5 - weightRest);
    }
  };

  const onDecrement = () => {
    const weightOrZero = weight || 2.5;
    const weightRest = weightOrZero % 2.5;
    if (weightRest === 0) {
      onWeightChanged(weightOrZero - 2.5);
    } else {
      onWeightChanged(weightOrZero - weightRest);
    }
  };

  return (
    <HStack>
      <Button onClick={onDecrement}>-</Button>
      <Input
        data-testid="weight-input"
        {...getInputProps({ onChange: onChange })}
      />
      <Button onClick={onIncrement}>+</Button>
    </HStack>
  );
};
