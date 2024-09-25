import React from "react";
import ReactDom from "react-dom";
import "@testing-library/jest-dom";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";
import { render } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";

describe("test HOC component", () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  let consoleSpy = null;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should log mount and unmount for Login component", () => {
    const WrappedLogin = WithLogging(Login);
    const { unmount } = render(<WrappedLogin />);
    expect(consoleSpy).toBeCalledWith("Component Login is mounted");
    unmount();
    expect(consoleSpy).toBeCalledWith("Component Login is going to unmount");
  });
});
