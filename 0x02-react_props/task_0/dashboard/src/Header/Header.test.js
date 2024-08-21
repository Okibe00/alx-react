import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Header from './Header'

describe('test the header component', () => {
  test("Render without breaking", () => {
    render(<Header />);
    // screen.debug();
  });

   //test for header tag
  test('check for presense of image and h1 tag', () => {
    render(<Header />);
    const header = screen.getByText('School dashboard');
    expect(header).toBeInTheDocument();
  })

  //test for image
  test('test for presense of image tag', () => {
    render(<Header />)
    // screen.debug();
    const imageTag = screen.getByAltText('holberton-logo');
    expect(imageTag).toBeInTheDocument();
  })
})
