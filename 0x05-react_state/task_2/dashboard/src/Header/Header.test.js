import { render, screen, fireEvent } from '@testing-library/react';
import React, { createContext } from 'react';
import '@testing-library/jest-dom';
import Header from './Header'
import  {StyleSheetTestUtils} from 'aphrodite';
import UsrContext from '../App/AppContext';

const testContext = {
  user: {
    email: 'okibe@mail',
    password: 'mail',
    isLoggedIn: true,
  },
  logOut: () => {}
}

describe('test the header component', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })
  test("Render without breaking", () => {
    render(<Header />)
  });

  test('check for presense of image and h1 tag', () => {
    render(<Header />);
    const header = screen.getByText('School dashboard');
    expect(header).toBeInTheDocument();
  })

  //test for image
  test('test for presense of image tag', () => {
    render(<Header />)
    const imageTag = screen.getByAltText('holberton-logo');
    expect(imageTag).toBeInTheDocument();
  });

  test('render logged out section with isLoggedIn set to true', () => {
    render(
      <UsrContext.Provider value={testContext}>
        <Header />
      </UsrContext.Provider>
    )
    const logoutSection = document.querySelector('#logoutSection');
    expect(logoutSection).toBeTruthy()
  });

  test('render logged out section with isLoggedIn set to true', () => {
   render(
      <UsrContext.Provider value={testContext}>
        <Header />
      </UsrContext.Provider>
    )
    const logoutSection = document.querySelector('#logoutSection');
    expect(logoutSection).toBeTruthy()
    const logOutSpy = jest.spyOn(testContext, 'logOut')
    fireEvent.click(logoutSection);
    expect(logOutSpy).toHaveBeenCalled();
  });

  test('render logged out section with isLoggedIn set to false', () => {
    const loggedOut = {
      user: {
        email: 'someemail',
        password:'somepassword',
        isLoggedIn: false}
    }
   render(
      <UsrContext.Provider value={loggedOut}>
        <Header />
      </UsrContext.Provider>
    )
    const logoutSection = document.querySelector('#logoutSection');
    expect(logoutSection).toBeFalsy();
  })
})
