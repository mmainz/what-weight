import {
  Button,
  HStack,
  Input,
  useNumberInput
} from "../../../_snowpack/pkg/@chakra-ui/react.js";
import React from "../../../_snowpack/pkg/react.js";
export const WeightInput = ({
  value,
  onChange,
  onIncrement,
  onDecrement
}) => {
  const {getInputProps} = useNumberInput({
    precision: 1,
    step: 2.5,
    value,
    onChange
  });
  return /* @__PURE__ */ React.createElement(HStack, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: onDecrement
  }, "-"), /* @__PURE__ */ React.createElement(Input, {
    "data-testid": "weight-input",
    ...getInputProps()
  }), /* @__PURE__ */ React.createElement(Button, {
    onClick: onIncrement
  }, "+"));
};
