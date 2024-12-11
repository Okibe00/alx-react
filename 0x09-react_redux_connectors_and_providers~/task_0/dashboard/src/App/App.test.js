import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App, { mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import { Notifications } from "../Notifications/Notifications";
import UsrContext from "./AppContext";
import { fromJS } from "immutable";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { uiReducer } from "../reducers/uiReducer";

const testStore = createStore(
  combineReducers({
    uiReducer,
  })
);

describe("test page element rendered", () => {
  const testContext = {
    user: {
      email: "someEmail",
      password: "somePassword",
      isLoggedIn: true,
    },
    logOut: () => {},
  };
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  test("test for App-header", () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <App />
      </Provider>
    );
    const text = getByText("School dashboard");
    expect(text).toBeInTheDocument();
  });

  test("test for App-body", () => {
    const { container } = render(
      <Provider store={testStore}>
        <App />
      </Provider>
    );
    const element = container.querySelector(".bodySection");
    expect(element).toBeInTheDocument();
  });

  test("test for App-footer", () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <App />
      </Provider>
    );
    const element = getByText("Copyright 2024 - Holberton School");
    expect(element).toBeInTheDocument();
  });
  test("test for notification", () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <App />
      </Provider>
    );
    const element = getByText("Your Notifications");
    expect(element).toBeInTheDocument();
  });

  test("CourseList is not displayed", () => {
    const { container } = render(
      <Provider store={testStore}>
        <App />
      </Provider>
    );
    const element = container.querySelector("table");
    expect(element).not.toBeInTheDocument();
  });

  test("isloggedin is false", () => {
    const { user, logOut } = testContext;
    user.isLoggedIn = false;
    const { container } = render(
      <Provider store={testStore}>
        <UsrContext.Provider value={{ user, logOut }}>
          <App />
        </UsrContext.Provider>
      </Provider>
    );
    const table = container.querySelector("table");
    const email = container.querySelector("#email");
    const password = container.querySelector("#password");
    expect(table).not.toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test("isloggedin is true", () => {
    const { user, logOut } = testContext;
    user.isLoggedIn = true;
    const { getByText } = render(
      <Provider store={testStore}>
        <UsrContext.Provider value={{ user, logOut }}>
          <App />
        </UsrContext.Provider>
      </Provider>
    );
    const title = getByText("Course list");
    expect(title).toBeTruthy();
  });

  test("logout function", () => {
    global.alert = jest.fn();
    render(
      <Provider store={testStore}>
        <UsrContext.Provider value={testContext}>
          <App />
        </UsrContext.Provider>
      </Provider>
    );
    fireEvent.keyDown(document, { key: "h", ctrlKey: true });
    expect(global.alert).toHaveBeenCalledWith("Logging you out");
  });
});

describe("test handleDisplay and hideHideDisplay on render", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test("test handledisplay on click", () => {
    const handleDisplayDrawer = jest.fn();
    const { container, getByText } = render(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />
    );
    const btn = getByText("Your Notifications");
    fireEvent.click(btn);
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  test("test handleHideDrawer on click", () => {
    const handleHideDrawer = jest.fn();
    const { container } = render(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );
    const btn = container.querySelector("#close-btn");
    fireEvent.click(btn);
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});

describe("mapStateToProps", () => {
  // beforeAll(() => {
  //   StyleSheetTestUtils.suppressStyleInjection();
  // });
  // afterAll(() => {
  //   StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  // });
  let state = fromJS({
    isUserLoggedIn: true,
  });
  const res = mapStateToProps(state);
  expect(res.isLoggedIn.get("isUserLoggedIn")).toBe(true);
});
