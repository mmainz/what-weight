import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { NumberInput } from '.';

const onChange = jest.fn();
const onIncrement = jest.fn();
const onDecrement = jest.fn();

const defaultProps = {
  onChange,
  onIncrement,
  onDecrement,
  precision: 0,
  step: 1,
};

describe('NumberInput', () => {
  it('renders the given value', () => {
    render(<NumberInput {...defaultProps} value="2" />);

    expect(screen.getByRole('spinbutton')).toHaveValue('2');
  });

  it('calls onChange when typing', async () => {
    render(<NumberInput {...defaultProps} value="2" />);

    const input = screen.getByRole('spinbutton');
    await userEvent.type(input, '1');

    expect(onChange).toHaveBeenLastCalledWith('21', 21);
  });

  it('calls onIncrement when clicking the increment button', async () => {
    render(<NumberInput {...defaultProps} value="2" />);

    await userEvent.click(screen.getByText('+'));

    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  it('calls onDecrement when clicking the decrement button', async () => {
    render(<NumberInput {...defaultProps} value="2" />);

    await userEvent.click(screen.getByText('-'));

    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
});
