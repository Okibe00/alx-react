/**
 * @module notificationReducer.test.js
 * @description Test suite for the notification reducer
 */

import { notificationReducer } from "./notificationReducer"

describe('Notification Reducer', () => {
  test(
    'FETCH_NOTIFICATIONS_SUCCESS isRead is false for all notifications'
    , () => {
      const action = {
        type: 'FETCH_NOTIFICATIONS_SUCCESS',
        data: [
          {
            id: 1,
            type: "default",
            value: "New course available"
          },
          {
            id: 2,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            type: "urgent",
            value: "New data available"
          }
        ]
      }
      const initialState = {
        notifications: [],
        filter: 'DEFAULT'
      }
    const state = notificationReducer(initialState, action);
    console.log(state);
    state.notifications.forEach(notification => {
      expect(notification.isRead).toBe(false);
    })
    expect(state.filter).toBe('DEFAULT');
  })
})