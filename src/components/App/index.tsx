import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RepsInput } from '../RepsInput';
import { WeightInput } from '../WeightInput';

export const App: React.FC = () => {
  const [liftedWeight, setLiftedWeight] = useState<number | undefined>();
  const [repsPerformed, setRepsPerformed] = useState<number | undefined>();

  return (
    <ChakraProvider>
      <Container>
        <Grid templateColumns="2fr 2fr" templateRows="1fr 1fr" gap={2}>
          <GridItem colStart={1} rowStart={1}>
            <WeightInput
              weight={liftedWeight}
              onWeightChanged={setLiftedWeight}
            />
          </GridItem>
          <GridItem colStart={1} rowStart={2}>
            <RepsInput reps={repsPerformed} onRepsChanged={setRepsPerformed} />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
};
