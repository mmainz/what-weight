import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { WeightInput } from '.';

const onChange = jest.fn();
const onIncrement = jest.fn();
const onDecrement = jest.fn();

const defaultProps = { onChange, onIncrement, onDecrement };

describe('WeightInput', () => {
  it('renders the given value', () => {
    render(<WeightInput {...defaultProps} value="2" />);

    expect(screen.getByTestId('weight-input')).toHaveValue('2');
  });

  it('calls onChange when typing', () => {
    render(<WeightInput {...defaultProps} value="2" />);

    const input = screen.getByTestId('weight-input');
    act(() => {
      userEvent.type(input, '1');
    });

    expect(onChange).toHaveBeenLastCalledWith('21', 21);
  });

  it('calls onIncrement when clicking the increment button', () => {
    render(<WeightInput {...defaultProps} value="2" />);

    act(() => {
      userEvent.click(screen.getByText('+'));
    });

    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  it('calls onDecrement when clicking the decrement button', () => {
    render(<WeightInput {...defaultProps} value="2" />);

    act(() => {
      userEvent.click(screen.getByText('-'));
    });

    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
});
