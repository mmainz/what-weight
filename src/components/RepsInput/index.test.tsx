import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { RepsInput } from '.';

const onRepsChanged = jest.fn();

describe('RepsInput', () => {
  it('accepts a reps value', () => {
    render(<RepsInput reps={3} onRepsChanged={onRepsChanged} />);

    expect(screen.getByTestId('reps-input')).toHaveValue('3');
  });

  it('sets the input to an empty string when reps is null', () => {
    render(<RepsInput reps={null} onRepsChanged={onRepsChanged} />);

    expect(screen.getByTestId('reps-input')).toHaveValue('');
  });

  it('changes the reps when typing', () => {
    render(<RepsInput reps={null} onRepsChanged={onRepsChanged} />);

    const input = screen.getByTestId('reps-input');
    act(() => {
      userEvent.type(input, '{backspace}4');
    });

    expect(onRepsChanged).toHaveBeenLastCalledWith(4);
  });

  it('does not allow typing values greater than 10', () => {
    render(<RepsInput reps={10} onRepsChanged={onRepsChanged} />);

    const input = screen.getByTestId('reps-input');
    act(() => {
      userEvent.type(input, '1');
    });

    expect(onRepsChanged).toHaveBeenLastCalledWith(10);
  });

  it('sets the reps to null when clearing the input', () => {
    render(<RepsInput reps={3} onRepsChanged={onRepsChanged} />);

    const input = screen.getByTestId('reps-input');
    act(() => {
      userEvent.clear(input);
    });

    expect(onRepsChanged).toHaveBeenLastCalledWith(null);
  });

  it('sets value to 1 when clicking increment on empty field', () => {
    render(<RepsInput reps={null} onRepsChanged={onRepsChanged} />);

    act(() => {
      userEvent.click(screen.getByText('+'));
    });

    expect(onRepsChanged).toHaveBeenCalledWith(1);
  });

  it('increments the value by 1 when clicking increment', () => {
    render(<RepsInput reps={1} onRepsChanged={onRepsChanged} />);

    act(() => {
      userEvent.click(screen.getByText('+'));
    });

    expect(onRepsChanged).toHaveBeenCalledWith(2);
  });

  it('does not increment beyond the maximum value', () => {
    render(<RepsInput reps={10} onRepsChanged={onRepsChanged} />);

    act(() => {
      userEvent.click(screen.getByText('+'));
    });

    expect(onRepsChanged).toHaveBeenCalledWith(10);
  });

  it('sets value to 0 when clicking decrement on empty field', () => {
    render(<RepsInput reps={null} onRepsChanged={onRepsChanged} />);

    act(() => {
      userEvent.click(screen.getByText('-'));
    });

    expect(onRepsChanged).toHaveBeenCalledWith(0);
  });

  it('decrements the value by 1 when clicking decrement', () => {
    render(<RepsInput reps={2} onRepsChanged={onRepsChanged} />);

    act(() => {
      userEvent.click(screen.getByText('-'));
    });

    expect(onRepsChanged).toHaveBeenCalledWith(1);
  });
});
