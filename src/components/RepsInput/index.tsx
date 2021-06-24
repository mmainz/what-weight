import {
  HStack,
  InputGroup,
  Text,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import React from 'react';

export type Props = {
  reps?: number;
  onRepsChanged: (reps?: number) => void;
};

export const RepsInput: React.FC<Props> = ({ reps, onRepsChanged }) => {
  const inputChanged = (_str: string, value: number) => {
    if (isNaN(value)) return onRepsChanged(undefined);
    return onRepsChanged(value);
  };

  return (
    <InputGroup>
      <HStack>
        <Text id="reps-performed-label">Reps performed:</Text>
        <NumberInput
          size="lg"
          maxWidth={100}
          aria-labelledby="reps-performed-label"
          value={reps || ''}
          onChange={inputChanged}
          min={1}
          max={10}
          step={1}
          precision={0}
        >
          <NumberInputField />
        </NumberInput>
      </HStack>
    </InputGroup>
  );
};