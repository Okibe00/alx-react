import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

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
    const { container } = render(<App />);
    const element = container.querySelector(".App-footer");
    expect(element).toBeInTheDocument();
  });
  test("test for notification", () => {
    const { getByText } = render(<App />);
    const element = getByText("Your notifications");
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
    const { container } = render(<App Isloggedin={true} />);
    const table = container.querySelector("table");
    const rows = container.querySelectorAll("tr");
    expect(table).toBeInTheDocument();
    expect(rows.length).toBe(4);
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
