import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import React from 'react';

export type Props = {
  reps: number | null;
  onRepsChanged: (reps: number | null) => void;
};

const maxReps = 10;

export const RepsInput: React.FC<Props> = ({ reps, onRepsChanged }) => {
  const { getInputProps } = useNumberInput({
    precision: 0,
    step: 1,
    value: reps || '',
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (isNaN(value)) return onRepsChanged(null);
    if (value >= maxReps) return onRepsChanged(maxReps);
    return onRepsChanged(value);
  };

  const onIncrement = () => {
    const repsOrZero = reps || 0;
    if (repsOrZero >= maxReps) return onRepsChanged(maxReps);
    onRepsChanged(repsOrZero + 1);
  };

  const onDecrement = () => {
    const repsOrOne = reps || 1;
    onRepsChanged(repsOrOne - 1);
  };

  return (
    <HStack>
      <Button onClick={onDecrement}>-</Button>
      <Input data-testid="reps-input" {...getInputProps({ onChange })} />
      <Button onClick={onIncrement}>+</Button>
    </HStack>
  );
};
