import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { App } from '.';

describe('App', () => {
  it('calculates the 1RM when filling all target inputs', async () => {
    render(<App />);

    const weightInput = screen.getByLabelText('Weight lifted:');
    const repsInput = screen.getByLabelText('Reps performed:');
    const rpeInput = screen.getByLabelText('At RPE:');

    await act(async () => {
      await userEvent.type(weightInput, '200', { delay: 1 });
      userEvent.type(repsInput, '3');
      userEvent.type(rpeInput, '9');
    });

    expect(screen.getByText('1RM: 224')).toBeInTheDocument();
  });
});
