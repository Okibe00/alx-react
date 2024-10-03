import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import { Notifications } from "../Notifications/Notifications";

describe("test page element rendered", () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })
  test("test for App-header", () => {
    const { getByText } = render(<App />);
    const text = getByText('School dashboard')
    expect(text).toBeInTheDocument();
  });

  test("test for App-body", () => {
    const { container } = render(<App />);
    const element = container.querySelector(".bodySection");
    expect(element).toBeInTheDocument();
  });

  test("test for App-footer", () => {
    const { getByText } = render(<App />);
    const element = getByText('Copyright 2024 - Holberton School');
    expect(element).toBeInTheDocument();
  });
  test("test for notification", () => {
    const { getByText } = render(<App />);
    const element = getByText("Your Notifications");
    expect(element).toBeInTheDocument();
  });

  test("CourseList is not displayed", () => {
    const { container } = render(<App />);
    const element = container.querySelector("table");
    expect(element).not.toBeInTheDocument();
  });

  test("isloggedin is false", () => {
    const { container } = render(<App Isloggedin={false} />);
    const table = container.querySelector("table");
    const email = container.querySelector("#email");
    const password = container.querySelector("#password");
    expect(table).not.toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test("isloggedin is true", () => {
    const { container, getByText } = render(<App Isloggedin={true} />);
    const title = getByText('Course list');
    expect(title).toBeTruthy();
  });

  test("logout function", () => {
    const logOut = jest.fn();
    global.alert = jest.fn();
    render(<App Isloggedin={true} logOut={logOut} />);
    fireEvent.keyDown(document, { key: "h", ctrlKey: true });
    expect(logOut).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith("Logging you out");
  });
});

describe("test handleDisplay and hideHideDisplay on render", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  test('test handledisplay on click', () => {
    const handleDisplayDrawer = jest.fn()
    const {container, getByText} = render(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />
    )
    const btn = getByText('Your Notifications');
    fireEvent.click(btn);
    expect(handleDisplayDrawer).toHaveBeenCalled();
  })

  test('test handleHideDrawer on click', () => {
    const handleHideDrawer = jest.fn();
    const {container} = render(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawer}
      />
    )
    const btn = container.querySelector('#close-btn');
    fireEvent.click(btn);
    expect(handleHideDrawer).toHaveBeenCalled();
  })
})
