import { ChakraProvider, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { WeightInput } from '../WeightInput';

export const App: React.FC = () => {
  const [liftedWeight, setLiftedWeight] = useState<number>();

  return (
    <ChakraProvider>
      <VStack>
        <WeightInput weight={liftedWeight} onWeightChanged={setLiftedWeight} />
      </VStack>
    </ChakraProvider>
  );
};
