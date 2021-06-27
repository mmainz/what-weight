import {
  Box,
  chakra,
  ChakraProvider,
  Container,
  FormLabel,
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
import { calculateEstimatedMax } from '../../calculateEstimatedMax';

const maxFormatter = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

const Label = chakra(FormLabel, {
  baseStyle: { fontSize: 'xl', whiteSpace: 'nowrap', margin: 0 },
});

export const App: React.FC = () => {
  const { weightInputProps, weight: liftedWeight } = useWeightInput();
  const { repsInputProps, reps: repsPerformed } = useRepsInput();
  const { rpeInputProps, rpe: actualRpe } = useRpeInput();

  const estimatedMax =
    liftedWeight && repsPerformed && actualRpe
      ? calculateEstimatedMax(liftedWeight, repsPerformed, actualRpe)
      : null;

  return (
    <ChakraProvider>
      <Container>
        <Box display="flex" alignItems="center" height="4em">
          <Heading>what weight!?</Heading>
        </Box>
        <Grid templateColumns="1fr 2fr" templateRows="1fr 1fr 1fr" gap={2}>
          <GridItem
            colStart={1}
            rowStart={1}
            display="flex"
            justifyContent="stretch"
            alignItems="center"
          >
            <Label htmlFor="weight-lifted">Weight lifted:</Label>
          </GridItem>
          <GridItem colStart={2} rowStart={1}>
            <NumberInput {...weightInputProps} id="weight-lifted" />
          </GridItem>
          <GridItem
            colStart={1}
            rowStart={2}
            display="flex"
            justifyContent="stretch"
            alignItems="center"
          >
            <Label htmlFor="reps-performed">Reps performed:</Label>
          </GridItem>
          <GridItem colStart={2} rowStart={2}>
            <NumberInput {...repsInputProps} id="reps-performed" />
          </GridItem>
          <GridItem
            colStart={1}
            rowStart={3}
            display="flex"
            justifyContent="stretch"
            alignItems="center"
          >
            <Label htmlFor="at-rpe">At RPE:</Label>
          </GridItem>
          <GridItem colStart={2} rowStart={3}>
            <NumberInput {...rpeInputProps} id="at-rpe" />
          </GridItem>
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="5em"
        >
          {estimatedMax && (
            <Text fontSize="3xl">1RM: {maxFormatter.format(estimatedMax)}</Text>
          )}
        </Box>
      </Container>
    </ChakraProvider>
  );
};
