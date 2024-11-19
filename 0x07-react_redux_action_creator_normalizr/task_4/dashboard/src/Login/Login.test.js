import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login.js';
import { StyleSheetTestUtils } from 'aphrodite';
import {userEvent} from '@testing-library/user-event';

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
// Add a test to verify that the submit button is disabled by default
// Add a test to verify that after changing the value of the two inputs, the button is enabled
test('button is disabled', () => {
  const { container } = render(<Login/>);
  const btn = container.querySelector('input[type="submit"]');
  expect(btn).toBeDisabled();
});
test('test one and both input filled', async () => {
  const { container } = render(<Login />);
  const btn = container.querySelector('input[type=submit]');
  const passwordField = container.querySelector('input[type=password')
  const emailField = container.querySelector('input[type=email]');
  await userEvent.type(passwordField, "password");
  expect(btn).toBeDisabled();
  await userEvent.type(emailField, "email");
  expect(btn).toBeEnabled();
})
})
