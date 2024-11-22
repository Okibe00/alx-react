import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Notifications } from "./Notifications.js";
import { StyleSheetTestUtils } from "aphrodite";
const notifications = [
  {
    id: 1,
    html: { __html: "" },
    type: "default",
    value: "I love react",
  },
  {
    id: 2,
    html: { __html: "" },
    type: "urgent",
    value: "Components for everyone",
  },
];

describe("renders when no props is given", () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  test("renders with an empty notification list", () => {
    render(<Notifications listNotifications={[]} />);
  });

  test("render no notification with empty notification array", () => {
    render(<Notifications listNotifications={[]} displayDrawer={true} />);
    const element = screen.getByText("No new Notification for now");
    expect(element).toBeTruthy();
  });
  test('render "Here is a list of notifications"', () => {
    render(
      <Notifications listNotifications={notifications} displayDrawer={true} />
    );
    const element = screen.getByText("Here is the list of notifications");
    expect(element).toBeTruthy();
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
    const {container, getByText} = render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    const btn = getByText('Your Notifications');
    fireEvent.click(btn);
    expect(handleDisplayDrawer).toHaveBeenCalled()

  })

  test('test handleHideDisplayDrawer on click', () => {
    const handleHideDrawer = jest.fn()
    const {container} = render(<Notifications handleHideDrawer={handleHideDrawer} displayDrawer={true} />);
    const btn = container.querySelector('#close-btn');
    fireEvent.click(btn);
    expect(handleHideDrawer).toHaveBeenCalled()
  })
})
