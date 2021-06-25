import {
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RepsInput } from '../RepsInput';
import { useRepsInput } from '../RepsInput/useRepsInput';
import { WeightInput } from '../WeightInput';
import { useWeightInput } from '../WeightInput/useWeightInput';

export const App: React.FC = () => {
  const { weightInputProps } = useWeightInput();
  const { repsInputProps } = useRepsInput();

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
            <WeightInput {...weightInputProps} />
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
            <RepsInput {...repsInputProps} />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
};
