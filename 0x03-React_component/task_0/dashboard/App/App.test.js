import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";

describe("test page element rendered", () => {
  test("test for App-header", () => {
    const { container } = render(<App />);
    const element = container.querySelector(".App-header");
    expect(element).toBeInTheDocument();
  });

  test("test for App-body", () => {
    const { container } = render(<App />);
    const element = container.querySelector(".App-body");
    expect(element).toBeInTheDocument();
  });

  test("test for App-footer", () => {
    const { container } = render(<App />);
    const element = container.querySelector(".App-footer");
    expect(element).toBeInTheDocument();
  });
  test("test for notification", () => {
    const { container } = render(<App />);
    // screen.debug();
    const element = container.querySelector(".notify");
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
});
