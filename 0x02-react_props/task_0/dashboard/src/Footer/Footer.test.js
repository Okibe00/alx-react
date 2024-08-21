import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer'

test('render without breaking', () => {
  render(<Footer />);
})

test('test for presence of copyright text', () => {
  const { container } = render(<Footer />);
  // screen.debug();
  const footer = screen.getByText(/Copyright*/);
  expect(footer).toBeInTheDocument();
})
