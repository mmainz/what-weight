import {
  Box,
  chakra,
  ChakraProvider,
  Container,
  extendTheme,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { NumberInput } from '../NumberInput';
import { useRepsInput } from '../../hooks/useRepsInput';
import { useWeightInput } from '../../hooks/useWeightInput';
import { useRpeInput } from '../../hooks/useRpeInput';
import {
  calculateEstimatedMax,
  calculateTargetWeight,
} from '../../weightCalculation';
import Logo from '../../assets/logo.png';

const breakpoints = {
  sm: '48em',
  md: '62em',
  lg: '80em',
  xl: '96em',
  '2xl': '112em',
};

const theme = extendTheme({ breakpoints });

const maxFormatter = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});
const weightFormatter = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 2,
});

const ResultContainer = chakra(GridItem, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5em',
  },
});
const LabelContainer = chakra(GridItem, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
  },
});
const Label = chakra(FormLabel, {
  baseStyle: { fontSize: 'xl', whiteSpace: 'nowrap', margin: 0 },
});

export const App: React.FC = () => {
  const { weightInputProps, weight: liftedWeight } = useWeightInput();
  const { repsInputProps: repsPerformedInputProps, reps: repsPerformed } =
    useRepsInput();
  const { rpeInputProps: actualRpeInputProps, rpe: actualRpe } = useRpeInput();
  const { repsInputProps: targetRepsInputProps, reps: targetReps } =
    useRepsInput();
  const { rpeInputProps: targetRpeInputProps, rpe: targetRpe } = useRpeInput();

  const estimatedMax =
    liftedWeight && repsPerformed && actualRpe
      ? calculateEstimatedMax(liftedWeight, repsPerformed, actualRpe)
      : null;

  const suggestedWeight =
    estimatedMax && targetReps && targetRpe
      ? calculateTargetWeight(estimatedMax, targetReps, targetRpe)
      : null;

  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth={['sm', '3xl']}>
        <Box
          display="flex"
          alignItems="center"
          height="4em"
          marginTop="0.5em"
          marginBottom="0.5em"
        >
          <Img src={Logo} borderRadius="6px" height="4em" />
          <Heading marginLeft="0.25em">what weight!?</Heading>
        </Box>
        <Grid
          templateColumns={['1fr 2fr', '1fr 2fr 1fr 2fr']}
          templateRows="1fr 1fr 1fr 2fr 1fr 1fr 2fr"
          gap={[2, 4]}
        >
          <LabelContainer colStart={1} rowStart={1}>
            <Label htmlFor="weight-lifted">Weight lifted:</Label>
          </LabelContainer>
          <GridItem colStart={2} rowStart={1}>
            <NumberInput {...weightInputProps} id="weight-lifted" />
          </GridItem>
          <LabelContainer colStart={1} rowStart={2}>
            <Label htmlFor="reps-performed">Reps performed:</Label>
          </LabelContainer>
          <GridItem colStart={2} rowStart={2}>
            <NumberInput {...repsPerformedInputProps} id="reps-performed" />
          </GridItem>
          <LabelContainer colStart={1} rowStart={3}>
            <Label htmlFor="at-rpe">At RPE:</Label>
          </LabelContainer>
          <GridItem colStart={2} rowStart={3}>
            <NumberInput {...actualRpeInputProps} id="at-rpe" />
          </GridItem>
          <ResultContainer colStart={1} colEnd={[-1, 3]} rowStart={4}>
            {estimatedMax && (
              <Text fontSize="3xl">
                1RM: {maxFormatter.format(estimatedMax)}
              </Text>
            )}
          </ResultContainer>
          <LabelContainer colStart={[1, 3]} rowStart={[5, 1]}>
            <Label htmlFor="target-reps">Target reps:</Label>
          </LabelContainer>
          <GridItem colStart={[2, 4]} rowStart={[5, 1]}>
            <NumberInput {...targetRepsInputProps} id="target-reps" />
          </GridItem>
          <LabelContainer colStart={[1, 3]} rowStart={[6, 2]}>
            <Label htmlFor="target-rpe">Target RPE:</Label>
          </LabelContainer>
          <GridItem colStart={[2, 4]} rowStart={[6, 2]}>
            <NumberInput {...targetRpeInputProps} id="target-rpe" />
          </GridItem>
          <ResultContainer colStart={[1, 3]} colEnd={[-1, 5]} rowStart={[7, 4]}>
            {suggestedWeight && (
              <Text fontSize="3xl">
                Weight: {weightFormatter.format(suggestedWeight)}
              </Text>
            )}
          </ResultContainer>
        </Grid>
      </Container>
    </ChakraProvider>
  );
};
