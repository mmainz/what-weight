import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { WeightInput } from '.';

const onWeightChanged = jest.fn();

describe('WeightInput', () => {
  it('accepts a weight', () => {
    render(<WeightInput weight={20} onWeightChanged={onWeightChanged} />);

    expect(screen.getByLabelText('Weight lifted:')).toHaveValue('20');
  });

  it('sets the input to an empty string when weight is undefined', () => {
    render(<WeightInput onWeightChanged={onWeightChanged} />);

    expect(screen.getByLabelText('Weight lifted:')).toHaveValue('');
  });

  it('changes the weight when typing', () => {
    render(<WeightInput weight={20} onWeightChanged={onWeightChanged} />);

    const input = screen.getByLabelText('Weight lifted:');
    act(() => {
      userEvent.type(input, '1');
    });

    expect(onWeightChanged).toHaveBeenCalledWith(201);
  });

  it('sets weight to undefined when clearing the input', () => {
    render(<WeightInput weight={20} onWeightChanged={onWeightChanged} />);

    const input = screen.getByLabelText('Weight lifted:');
    act(() => {
      userEvent.clear(input);
    });

    expect(onWeightChanged).toHaveBeenCalledWith(undefined);
  });
});
