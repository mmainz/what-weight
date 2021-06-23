import {
  HStack,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import React from 'react';

export type Props = {
  weight?: number;
  onWeightChanged: (weight?: number) => void;
};

export const WeightInput: React.FC<Props> = ({ weight, onWeightChanged }) => {
  const inputChanged = (_str: string, value: number) => {
    if (isNaN(value)) return onWeightChanged(undefined);
    return onWeightChanged(value);
  };

  return (
    <HStack>
      <InputGroup>
        <InputLeftAddon id="weight-lifted-label">Weight lifted:</InputLeftAddon>
        <NumberInput
          aria-labelledby="weight-lifted-label"
          value={weight || ''}
          onChange={inputChanged}
          step={2.5}
          precision={1}
        >
          <NumberInputField />
        </NumberInput>
      </InputGroup>
    </HStack>
  );
};
