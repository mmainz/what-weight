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

export const WeightInput: React.FC<Props> = ({
  value,
  onChange,
  onIncrement,
  onDecrement,
}) => {
  const { getInputProps } = useNumberInput({
    precision: 1,
    step: 2.5,
    value,
    onChange,
  });

  return (
    <HStack>
      <Button onClick={onDecrement}>-</Button>
      <Input data-testid="weight-input" {...getInputProps()} />
      <Button onClick={onIncrement}>+</Button>
    </HStack>
  );
};
