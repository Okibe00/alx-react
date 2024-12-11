/**
 * @module notificationSelector
 * @description test suite for notification selector
 */

import { notificationReducer } from "../reducers/notificationReducer"
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";

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
// state = notificationReducer(state, {
//   type: 'SET_TYPE_FILTER',
//   filter: 'DEFAULT'
// })
describe('notificationSelector', () => {
  test('filterTypepSelector should return DEFAULT', () => {
    expect(filterTypeSelected(state)).toBe('DEFAULT');
  });

  test('getNotifications should return list of notifications', () => {
    const ntf = getNotifications(state);
    expect(Array.isArray(ntf)).toBe(true);
    expect(ntf.length).toEqual(3);
  })

  test('getUnreadNotifications should return list of notifications', () => {
    const ntf = getUnreadNotifications(state);
    expect(Array.isArray(ntf)).toBe(true);
    expect(ntf.length).toEqual(3);
  })

})