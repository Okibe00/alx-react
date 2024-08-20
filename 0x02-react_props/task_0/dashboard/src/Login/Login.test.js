import React from 'react';
import { screen, render } from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Login to access the full dashboard');
  expect(linkElement).toBeInTheDocument();
});
