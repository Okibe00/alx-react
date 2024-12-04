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
        filter: 'DEFAULT',
        notifications: []
      }
    let state = notificationReducer(initialState, action);
    state = state.toJS();
    state.result.notifications.forEach(key => {
      const value = state.entities.notifications[key].isRead;
      expect(value).toBe(false);
    })
    expect(state.result.filter).toBe('DEFAULT');
  })
  test('MARK_AS_READ, should set isRead to true', () => {
    const  initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    }

    const action = {
      type: 'MARK_AS_READ',
      index: 1
    }

    let state = notificationReducer(initialState, action);
    state = state.toJS();
    state.result.notifications.forEach(key => {
      if (key == action.index) {
        let value = state.entities.notifications[key].isRead;
        expect(value).toBe(true);
      }
    })
  });
  test('SET_FILTER_TYPE should set change filter key', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: []
    }
    const action = {
      type: 'SET_TYPE_FILTER',
      filter: 'URGENT'
    }
    let state = notificationReducer(initialState, action);
    state = state.toJS();
    expect(state.result.filter).toBe(action.filter);
  })
})