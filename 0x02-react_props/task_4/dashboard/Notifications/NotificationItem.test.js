import React from 'react';
import '@testing-library/jest-dom';
import NotificationItem from  './NotificationItem.js';
import { Notifications } from  './Notifications.js';
import { getAllByRole, render, screen } from '@testing-library/react';

describe("test notificationItem", () => {
  test("render without crashing", () => {
    render(<NotificationItem />);
  })

  test('test li items elements', () => {
    render(<Notifications />);
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  })
})
