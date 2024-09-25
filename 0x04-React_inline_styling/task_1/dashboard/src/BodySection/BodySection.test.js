import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/dom";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";
import { node } from "webpack";

describe("Testing body components", () => {
  test("BodySection", () => {
    const { getByText } = render(
      <BodySection title={"test title"}>
        <p>test child node</p>
      </BodySection>
    );
    const header = getByText("test title");
    const child = getByText("test child node");
    expect(header).toBeTruthy();
    expect(child).toBeTruthy();
  });
});
