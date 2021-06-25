import {
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RepsInput } from '../RepsInput';
import { WeightInput } from '../WeightInput';

export const App: React.FC = () => {
  const [liftedWeight, setLiftedWeight] = useState<number | null>(null);
  const [repsPerformed, setRepsPerformed] = useState<number | null>(null);

  return (
    <ChakraProvider>
      <Container>
        <Grid templateColumns="1fr 2fr" templateRows="1fr 1fr 1fr" gap={2}>
          <GridItem colStart={1} colEnd={3} rowStart={1}>
            <Heading>what weight!?</Heading>
          </GridItem>
          <GridItem
            colStart={1}
            rowStart={2}
            display="flex"
            justifyContent="stretch"
            alignItems="center"
          >
            <Text fontSize="xl" whiteSpace="nowrap" textAlign="center">
              Weight lifted:
            </Text>
          </GridItem>
          <GridItem colStart={2} rowStart={2}>
            <WeightInput
              weight={liftedWeight}
              onWeightChanged={setLiftedWeight}
            />
          </GridItem>
          <GridItem
            colStart={1}
            rowStart={3}
            display="flex"
            justifyContent="stretch"
            alignItems="center"
          >
            <Text fontSize="xl" whiteSpace="nowrap">
              Reps performed:
            </Text>
          </GridItem>
          <GridItem colStart={2} rowStart={3}>
            <RepsInput reps={repsPerformed} onRepsChanged={setRepsPerformed} />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
};
