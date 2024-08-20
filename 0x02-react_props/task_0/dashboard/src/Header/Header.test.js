import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Header } from './Header'

test("Render without breaking", () => {
  render(<Header />);
})
