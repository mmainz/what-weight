import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { App } from '.';

describe('App', () => {
  it('calculates a suggested weight when filling all inputs', async () => {
    render(<App />);

    const weightInput = screen.getByLabelText('Weight lifted:');
    const repsPerformedInput = screen.getByLabelText('Reps performed:');
    const actualRpeInput = screen.getByLabelText('At RPE:');
    const targetRepsInput = screen.getByLabelText('Target reps:');
    const targetRpeInput = screen.getByLabelText('Target RPE:');

    await act(async () => {
      await userEvent.type(weightInput, '200', { delay: 1 });
      userEvent.type(repsPerformedInput, '3');
      userEvent.type(actualRpeInput, '9');
      userEvent.type(targetRepsInput, '2');
      userEvent.type(targetRpeInput, '8');
    });

    expect(screen.getByText('1RM: 224')).toBeInTheDocument();
    expect(screen.getByText('Weight: 200')).toBeInTheDocument();
  });
});
