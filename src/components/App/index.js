import {
  Box,
  chakra,
  ChakraProvider,
  Container,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Text
} from "../../../_snowpack/pkg/@chakra-ui/react.js";
import React from "../../../_snowpack/pkg/react.js";
import {NumberInput} from "../NumberInput/index.js";
import {useRepsInput} from "../../hooks/useRepsInput.js";
import {useWeightInput} from "../../hooks/useWeightInput.js";
import {useRpeInput} from "../../hooks/useRpeInput.js";
import {
  calculateEstimatedMax,
  calculateTargetWeight
} from "../../weightCalculation.js";
const maxFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
});
const weightFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 1
});
const Label = chakra(FormLabel, {
  baseStyle: {fontSize: "xl", whiteSpace: "nowrap", margin: 0}
});
export const App = () => {
  const {weightInputProps, weight: liftedWeight} = useWeightInput();
  const {repsInputProps: repsPerformedInputProps, reps: repsPerformed} = useRepsInput();
  const {rpeInputProps: actualRpeInputProps, rpe: actualRpe} = useRpeInput();
  const {repsInputProps: targetRepsInputProps, reps: targetReps} = useRepsInput();
  const {rpeInputProps: targetRpeInputProps, rpe: targetRpe} = useRpeInput();
  const estimatedMax = liftedWeight && repsPerformed && actualRpe ? calculateEstimatedMax(liftedWeight, repsPerformed, actualRpe) : null;
  const suggestedWeight = estimatedMax && targetReps && targetRpe ? calculateTargetWeight(estimatedMax, targetReps, targetRpe) : null;
  return /* @__PURE__ */ React.createElement(ChakraProvider, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    height: "4em"
  }, /* @__PURE__ */ React.createElement(Heading, null, "what weight!?")), /* @__PURE__ */ React.createElement(Grid, {
    templateColumns: "1fr 2fr",
    templateRows: "1fr 1fr 1fr 2fr 1fr 1fr 2fr",
    gap: 2
  }, /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    rowStart: 1,
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "weight-lifted"
  }, "Weight lifted:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 1
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...weightInputProps,
    id: "weight-lifted"
  })), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    rowStart: 2,
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "reps-performed"
  }, "Reps performed:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 2
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...repsPerformedInputProps,
    id: "reps-performed"
  })), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    rowStart: 3,
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "at-rpe"
  }, "At RPE:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 3
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...actualRpeInputProps,
    id: "at-rpe"
  })), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    colEnd: -1,
    rowStart: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5em"
  }, estimatedMax && /* @__PURE__ */ React.createElement(Text, {
    fontSize: "3xl"
  }, "1RM: ", maxFormatter.format(estimatedMax))), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    rowStart: 5,
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "target-reps"
  }, "Target reps:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 5
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...targetRepsInputProps,
    id: "target-reps"
  })), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    rowStart: 6,
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "target-rpe"
  }, "Target RPE:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 6
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...targetRpeInputProps,
    id: "target-rpe"
  })), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    colEnd: -1,
    rowStart: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5em"
  }, suggestedWeight && /* @__PURE__ */ React.createElement(Text, {
    fontSize: "3xl"
  }, "Weight: ", weightFormatter.format(suggestedWeight))))));
};
