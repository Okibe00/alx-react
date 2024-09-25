import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/dom";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";


describe("Testing body components", () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })
  
  test("BodySectionWithMarginBottom", () => {
    const { getByText } = render(
      <BodySectionWithMarginBottom title={"test title"}>
        <p>test child node</p>
      </BodySectionWithMarginBottom>
    );
    const header = getByText("test title");
    const child = getByText("test child node");
    expect(header).toBeTruthy();
    expect(child).toBeTruthy();
  });
});
