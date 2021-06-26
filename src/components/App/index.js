import {
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Heading,
  Text
} from "../../../_snowpack/pkg/@chakra-ui/react.js";
import React from "../../../_snowpack/pkg/react.js";
import {RepsInput} from "../RepsInput/index.js";
import {useRepsInput} from "../RepsInput/useRepsInput.js";
import {WeightInput} from "../WeightInput/index.js";
import {useWeightInput} from "../WeightInput/useWeightInput.js";
export const App = () => {
  const {weightInputProps} = useWeightInput();
  const {repsInputProps} = useRepsInput();
  return /* @__PURE__ */ React.createElement(ChakraProvider, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Grid, {
    templateColumns: "1fr 2fr",
    templateRows: "1fr 1fr 1fr",
    gap: 2
  }, /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    colEnd: 3,
    rowStart: 1
  }, /* @__PURE__ */ React.createElement(Heading, null, "what weight!?")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    rowStart: 2,
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Text, {
    fontSize: "xl",
    whiteSpace: "nowrap",
    textAlign: "center"
  }, "Weight lifted:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 2
  }, /* @__PURE__ */ React.createElement(WeightInput, {
    ...weightInputProps
  })), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 1,
    rowStart: 3,
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Text, {
    fontSize: "xl",
    whiteSpace: "nowrap"
  }, "Reps performed:")), /* @__PURE__ */ React.createElement(GridItem, {
    colStart: 2,
    rowStart: 3
  }, /* @__PURE__ */ React.createElement(RepsInput, {
    ...repsInputProps
  })))));
};
