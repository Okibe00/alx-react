/**
 * @module uiReducerTest
 * @description This module contains uiReducer test and validates that the function correctly calculates the app state
 * @requires Jest
 * @requires ../src/reducer/uiReducer/uiReducer
 * @see {@link ./uiReducer.js } for function implementation
 * @author Okibe Onmeje
 * @date 21/11/2024
 */
import { uiReducer } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
describe('uiReducer', () => {
  let initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  }

  test('returned state object to equal initialState', () => {
      const newState = uiReducer(initialState, {});
      console.log('newState: ', newState);
      console.log('initialState: ', initialState);
      expect(newState).toEqual(initialState);
  });

  test('returned state object to equal initial state object', () => {
    const action = {
      type: 'SELECT_COURSE'
    }
    const newState = uiReducer(initialState, action);
    console.log('newState: ', newState);
    console.log('initialState: ', initialState);
    expect(newState).toEqual(initialState);
  });

  test('should change isNotificationDrawerVisible to true', () => {
    let newState = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER);
    expect(newState.isNotificationDrawerVisible).toBe(true);
  });
})
