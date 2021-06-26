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
  precision: number;
  step: number;
};

export const NumberInput: React.FC<Props> = ({
  value,
  onChange,
  onIncrement,
  onDecrement,
  precision,
  step,
}) => {
  const { getInputProps } = useNumberInput({
    precision,
    step,
    value,
    onChange,
  });

  return (
    <HStack>
      <Button onClick={onDecrement}>-</Button>
      <Input {...getInputProps()} />
      <Button onClick={onIncrement}>+</Button>
    </HStack>
  );
};
