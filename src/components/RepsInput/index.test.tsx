import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { RepsInput } from '.';

const onChange = jest.fn();
const onIncrement = jest.fn();
const onDecrement = jest.fn();

const defaultProps = { onChange, onIncrement, onDecrement };

describe('RepsInput', () => {
  it('renders the given value', () => {
    render(<RepsInput {...defaultProps} value="2" />);

    expect(screen.getByTestId('reps-input')).toHaveValue('2');
  });

  it('calls onChange when typing', () => {
    render(<RepsInput {...defaultProps} value="2" />);

    const input = screen.getByTestId('reps-input');
    act(() => {
      userEvent.type(input, '1');
    });

    expect(onChange).toHaveBeenLastCalledWith('21', 21);
  });

  it('calls onIncrement when clicking the increment button', () => {
    render(<RepsInput {...defaultProps} value="2" />);

    act(() => {
      userEvent.click(screen.getByText('+'));
    });

    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  it('calls onDecrement when clicking the decrement button', () => {
    render(<RepsInput {...defaultProps} value="2" />);

    act(() => {
      userEvent.click(screen.getByText('-'));
    });

    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
});
