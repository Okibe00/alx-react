import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login.js';
import { StyleSheetTestUtils } from 'aphrodite';
describe('test the login component', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })
  test('renders without crashing', () => {
    render(<Login />);
  });

  //test for input tags
  test('test for presense of email input', () => {
    const { container } = render(<Login />);
    const email = container.querySelector('#email');
    const passwd = container.querySelector('#password');
    expect(email).toBeInTheDocument();
    expect(passwd).toBeInTheDocument();
  })

  test('test for presense of password', () => {
    const { container } = render(<Login />);
    const passwd = container.querySelector('#password');
    expect(passwd).toBeInTheDocument();
  })

})
