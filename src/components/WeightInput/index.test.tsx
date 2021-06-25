import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { WeightInput } from '.';

const onWeightChanged = jest.fn();

describe('WeightInput', () => {
  it('accepts a weight', () => {
    render(<WeightInput weight={20} onWeightChanged={onWeightChanged} />);

    expect(screen.getByTestId('weight-input')).toHaveValue('20');
  });

  it('sets the input to an empty string when weight is null', () => {
    render(<WeightInput weight={null} onWeightChanged={onWeightChanged} />);

    expect(screen.getByTestId('weight-input')).toHaveValue('');
  });

  it('changes the weight when typing', () => {
    render(<WeightInput weight={20} onWeightChanged={onWeightChanged} />);

    const input = screen.getByTestId('weight-input');
    act(() => {
      userEvent.type(input, '1');
    });

    expect(onWeightChanged).toHaveBeenCalledWith(201);
  });

  it('sets weight to null when clearing the input', () => {
    render(<WeightInput weight={20} onWeightChanged={onWeightChanged} />);

    const input = screen.getByTestId('weight-input');
    act(() => {
      userEvent.clear(input);
    });

    expect(onWeightChanged).toHaveBeenCalledWith(null);
  });

  it('sets value to 2.5 when clicking increment on empty field', () => {
    render(<WeightInput weight={null} onWeightChanged={onWeightChanged} />);

    act(() => {
      userEvent.click(screen.getByText('+'));
    });

    expect(onWeightChanged).toHaveBeenCalledWith(2.5);
  });

  it('increments the value by 2.5 when clicking increment', () => {
    render(<WeightInput weight={20} onWeightChanged={onWeightChanged} />);

    act(() => {
      userEvent.click(screen.getByText('+'));
    });

    expect(onWeightChanged).toHaveBeenCalledWith(22.5);
  });

  it('rounds to the next 2.5 increment when incrementing odd number', () => {
    render(<WeightInput weight={11} onWeightChanged={onWeightChanged} />);

    act(() => {
      userEvent.click(screen.getByText('+'));
    });

    expect(onWeightChanged).toHaveBeenCalledWith(12.5);
  });

  it('sets value to 0 when clicking decrement on empty field', () => {
    render(<WeightInput weight={null} onWeightChanged={onWeightChanged} />);

    act(() => {
      userEvent.click(screen.getByText('-'));
    });

    expect(onWeightChanged).toHaveBeenCalledWith(0);
  });

  it('decrements the value by 2.5 when clicking decrement', () => {
    render(<WeightInput weight={20} onWeightChanged={onWeightChanged} />);

    act(() => {
      userEvent.click(screen.getByText('-'));
    });

    expect(onWeightChanged).toHaveBeenCalledWith(17.5);
  });

  it('rounds to the next 2.5 increment when decrementing odd number', () => {
    render(<WeightInput weight={11} onWeightChanged={onWeightChanged} />);

    act(() => {
      userEvent.click(screen.getByText('-'));
    });

    expect(onWeightChanged).toHaveBeenCalledWith(10);
  });
});
