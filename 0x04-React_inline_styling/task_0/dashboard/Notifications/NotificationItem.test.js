import React from "react";
import "@testing-library/jest-dom";
import NotificationItem from "./NotificationItem.js";
// import { Notifications } from "./Notifications.js";
import {
  render,
  fireEvent,
} from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
describe("test notificationItem", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  test("render without crashing", () => {
    render(<NotificationItem />);
  });

  test("markAsRead is called with right id", () => {
    const na = [{ id: 1, type: "default", value: "New course available" }];
    const mockFn = jest.fn((id) =>
      console.log(`Notification ${id} has been marked as read`)
    );
    const { container } = render(
      <NotificationItem
        type={na[0].type}
        value={na[0].value}
        key_id={na[0].id}
        markAsRead={mockFn}
      />
    );
    const consoleSpy = jest.spyOn(console, "log");
    const li = container.querySelector("li");
    fireEvent.click(li);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );
    mockFn.mockRestore();
    consoleSpy.mockRestore();
  });
});
