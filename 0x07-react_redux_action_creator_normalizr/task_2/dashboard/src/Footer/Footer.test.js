import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer'
import { StyleSheetTestUtils } from 'aphrodite';
import UsrContext from '../App/AppContext';


const AppContext = {
  user: {
    email: 'somemail',
    password: 'password',
    isLoggedIn: false
  },
  logOut: () => {}
}

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
test('test linked displayed when logged in', () => {
  const {user, logOut} = AppContext
  user.isLoggedIn = true
  render(
    <UsrContext.Provider value={{user, logOut}}>
      <Footer />
    </UsrContext.Provider>
  );
  const footer = screen.getByText('Contact us');
  expect(footer).toBeInTheDocument();
})
test('test link not displayed when logge out', () => {
  const {user, logOut} = AppContext;
  user.isLoggedIn = false
  render(
    <UsrContext.Provider value={{user, logOut}}>
      <Footer />
    </UsrContext.Provider>
  );
  const footer = screen.queryByText('Contact us');
  expect(footer).toBeFalsy();
})
