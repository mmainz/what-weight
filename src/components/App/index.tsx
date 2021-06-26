import {
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { NumberInput } from '../NumberInput';
import { useRepsInput } from '../../hooks/useRepsInput';
import { useWeightInput } from '../../hooks/useWeightInput';
import { useRpeInput } from '../../hooks/useRpeInput';

export const App: React.FC = () => {
  const { weightInputProps } = useWeightInput();
  const { repsInputProps } = useRepsInput();
  const { rpeInputProps } = useRpeInput();

  return (
    <ChakraProvider>
      <Container>
        <Grid templateColumns="1fr 2fr" templateRows="1fr 1fr 1fr 1fr" gap={2}>
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
            <NumberInput {...weightInputProps} />
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
            <NumberInput {...repsInputProps} />
          </GridItem>
          <GridItem
            colStart={1}
            rowStart={4}
            display="flex"
            justifyContent="stretch"
            alignItems="center"
          >
            <Text fontSize="xl" whiteSpace="nowrap">
              At RPE:
            </Text>
          </GridItem>
          <GridItem colStart={2} rowStart={4}>
            <NumberInput {...rpeInputProps} />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
};
