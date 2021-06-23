import { render, screen } from '@testing-library/react';
import React from 'react';
import { App } from '.';

describe('App', () => {
  it('renders the weight input', () => {
    render(<App />);

    expect(screen.getByText('Weight lifted:')).toBeInTheDocument();
  });
});
