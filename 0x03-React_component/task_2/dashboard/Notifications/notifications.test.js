import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Notifications } from "./Notifications.js";

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
  test("renders with an empty notification list", () => {
    render(<Notifications listNotifications={[]} />);
  });

  test("render no notification with empty notification array", () => {
    render(<Notifications listNotifications={[]} displayDrawer={true} />);
    const element = screen.getByText("No new Notification for now");
    screen.debug();
    expect(element).toBeTruthy();
  });
  test('render "Here is a list of notifications"', () => {
    render(
      <Notifications listNotifications={notifications} displayDrawer={true} />
    );
    const element = screen.getByText("Here is the list of notifications");
    expect(element).toBeTruthy();
  });

  test("markAsRead function", () => {
    const spy = jest.spyOn(console, "log");
    const instance = new Notifications();
    instance.markAsRead(42);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("Notification 42 has been marked as read");
    spy.mockRestore();
  });
});
