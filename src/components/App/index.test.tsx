import { render, screen } from '@testing-library/react';
import React from 'react';
import { App } from '.';

describe('App', () => {
  it('renders something', async () => {
    render(<App />);

    expect(await screen.findByText('Hello, World!')).toBeInTheDocument();
  });
});
