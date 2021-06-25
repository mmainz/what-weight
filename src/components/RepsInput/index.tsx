import {
  Button,
  HStack,
  Input,
  UseCounterProps,
  useNumberInput,
} from '@chakra-ui/react';
import React from 'react';

export type Props = {
  value: string;
  onChange: NonNullable<UseCounterProps['onChange']>;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const RepsInput: React.FC<Props> = ({
  value,
  onChange,
  onIncrement,
  onDecrement,
}) => {
  const { getInputProps } = useNumberInput({
    precision: 0,
    step: 1,
    value,
    onChange,
  });

  return (
    <HStack>
      <Button onClick={onDecrement}>-</Button>
      <Input data-testid="reps-input" {...getInputProps()} />
      <Button onClick={onIncrement}>+</Button>
    </HStack>
  );
};
