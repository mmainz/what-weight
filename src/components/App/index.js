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
import {calculateEstimatedMax} from "../../calculateEstimatedMax.js";
const maxFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
});
const Label = chakra(FormLabel, {
  baseStyle: {fontSize: "xl", whiteSpace: "nowrap", margin: 0}
});
export const App = () => {
  const {weightInputProps, weight: liftedWeight} = useWeightInput();
  const {repsInputProps, reps: repsPerformed} = useRepsInput();
  const {rpeInputProps, rpe: actualRpe} = useRpeInput();
  const estimatedMax = liftedWeight && repsPerformed && actualRpe ? calculateEstimatedMax(liftedWeight, repsPerformed, actualRpe) : null;
  return /* @__PURE__ */ React.createElement(ChakraProvider, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    height: "4em"
  }, /* @__PURE__ */ React.createElement(Heading, null, "what weight!?")), /* @__PURE__ */ React.createElement(Grid, {
    templateColumns: "1fr 2fr",
    templateRows: "1fr 1fr 1fr",
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
    ...repsInputProps,
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
    ...rpeInputProps,
    id: "at-rpe"
  }))), /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5em"
  }, estimatedMax && /* @__PURE__ */ React.createElement(Text, {
    fontSize: "3xl"
  }, "1RM: ", maxFormatter.format(estimatedMax)))));
};
