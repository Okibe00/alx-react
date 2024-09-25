import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer'
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection()
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
});

test('render without breaking', () => {
  render(<Footer />);
})

test('test for presence of copyright text', () => {
  const { container } = render(<Footer />);
  const footer = screen.getByText(/Copyright*/);
  expect(footer).toBeInTheDocument();
})
