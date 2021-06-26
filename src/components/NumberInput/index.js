import {
  Button,
  HStack,
  Input,
  useNumberInput
} from "../../../_snowpack/pkg/@chakra-ui/react.js";
import React from "../../../_snowpack/pkg/react.js";
export const NumberInput = ({
  value,
  onChange,
  onIncrement,
  onDecrement,
  precision,
  step
}) => {
  const {getInputProps} = useNumberInput({
    precision,
    step,
    value,
    onChange
  });
  return /* @__PURE__ */ React.createElement(HStack, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: onDecrement
  }, "-"), /* @__PURE__ */ React.createElement(Input, {
    ...getInputProps()
  }), /* @__PURE__ */ React.createElement(Button, {
    onClick: onIncrement
  }, "+"));
};
