import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer'

test('render without breaking', () => {
  render(<Footer />);
})
