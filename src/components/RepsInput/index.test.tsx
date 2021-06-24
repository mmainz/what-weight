import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { RepsInput } from '.';

const onRepsChanged = jest.fn();

describe('RepsInput', () => {
  it('accepts a reps value', () => {
    render(<RepsInput reps={3} onRepsChanged={onRepsChanged} />);

    expect(screen.getByLabelText('Reps performed:')).toHaveValue('3');
  });

  it('sets the input to an empty string when reps is undefined', () => {
    render(<RepsInput onRepsChanged={onRepsChanged} />);

    expect(screen.getByLabelText('Reps performed:')).toHaveValue('');
  });

  it('changes the reps when typing', () => {
    render(<RepsInput onRepsChanged={onRepsChanged} />);

    const input = screen.getByLabelText('Reps performed:');
    act(() => {
      userEvent.type(input, '{backspace}4');
    });

    expect(onRepsChanged).toHaveBeenLastCalledWith(4);
  });

  it('sets the reps to undefined when clearing the input', () => {
    render(<RepsInput reps={3} onRepsChanged={onRepsChanged} />);

    const input = screen.getByLabelText('Reps performed:');
    act(() => {
      userEvent.clear(input);
    });

    expect(onRepsChanged).toHaveBeenLastCalledWith(undefined);
  });
});
