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
  Text
} from "../../../_snowpack/pkg/@chakra-ui/react.js";
import React from "../../../_snowpack/pkg/react.js";
import {createBreakpoints} from "../../../_snowpack/pkg/@chakra-ui/theme-tools.js";
import {NumberInput} from "../NumberInput/index.js";
import {useRepsInput} from "../../hooks/useRepsInput.js";
import {useWeightInput} from "../../hooks/useWeightInput.js";
import {useRpeInput} from "../../hooks/useRpeInput.js";
import {
  calculateEstimatedMax,
  calculateTargetWeight
} from "../../weightCalculation.js";
const breakpoints = createBreakpoints({
  sm: "48em",
  md: "62em",
  lg: "80em",
  xl: "96em",
  "2xl": "112em"
});
const theme = extendTheme({breakpoints});
const maxFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
});
const weightFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 2
});
const ResultContainer = chakra(GridItem, {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5em"
  }
});
const LabelContainer = chakra(GridItem, {
  baseStyle: {
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center"
  }
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
  return /* @__PURE__ */ React.createElement(ChakraProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(Container, {
    maxWidth: ["sm", "3xl"]
  }, /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    height: "4em"
  }, /* @__PURE__ */ React.createElement(Heading, null, "what weight!?")), /* @__PURE__ */ React.createElement(Grid, {
    templateColumns: ["1fr 2fr", "1fr 2fr 1fr 2fr"],
    templateRows: "1fr 1fr 1fr 2fr 1fr 1fr 2fr",
    gap: [2, 4]
  }, /* @__PURE__ */ React.createElement(LabelContainer, {
    colStart: 1,
    rowStart: 1
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "weight-lifted"
  }, "Weight lifted:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 1
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...weightInputProps,
    id: "weight-lifted"
  })), /* @__PURE__ */ React.createElement(LabelContainer, {
    colStart: 1,
    rowStart: 2
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "reps-performed"
  }, "Reps performed:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 2
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...repsPerformedInputProps,
    id: "reps-performed"
  })), /* @__PURE__ */ React.createElement(LabelContainer, {
    colStart: 1,
    rowStart: 3
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "at-rpe"
  }, "At RPE:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 3
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...actualRpeInputProps,
    id: "at-rpe"
  })), /* @__PURE__ */ React.createElement(ResultContainer, {
    colStart: 1,
    colEnd: [-1, 3],
    rowStart: 4
  }, estimatedMax && /* @__PURE__ */ React.createElement(Text, {
    fontSize: "3xl"
  }, "1RM: ", maxFormatter.format(estimatedMax))), /* @__PURE__ */ React.createElement(LabelContainer, {
    colStart: [1, 3],
    rowStart: [5, 1]
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "target-reps"
  }, "Target reps:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: [2, 4],
    rowStart: [5, 1]
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...targetRepsInputProps,
    id: "target-reps"
  })), /* @__PURE__ */ React.createElement(LabelContainer, {
    colStart: [1, 3],
    rowStart: [6, 2]
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "target-rpe"
  }, "Target RPE:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: [2, 4],
    rowStart: [6, 2]
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    ...targetRpeInputProps,
    id: "target-rpe"
  })), /* @__PURE__ */ React.createElement(ResultContainer, {
    colStart: [1, 3],
    colEnd: [-1, 5],
    rowStart: [7, 4]
  }, suggestedWeight && /* @__PURE__ */ React.createElement(Text, {
    fontSize: "3xl"
  }, "Weight: ", weightFormatter.format(suggestedWeight))))));
};
