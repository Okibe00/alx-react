/**
 * @module - uiReducer
 * @description - app UI reducer
 */
import { LOGIN, LOGIN_FAILURE, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from '../actions/uiActionTypes';
import { Map } from 'immutable';

let initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  })


/**
 * updates the app state
 * @param {Object} state - app state object
 * @param {object} action - action objects
 */
export function uiReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGOUT':
      return state.set('isUserLoggedIn', false);
    case 'LOGIN_FAILURE':
      return state.set('isUserLoggedIn', false);
    case 'LOGIN_SUCCESS':
      return state.set('isUserLoggedIn', true);
    case 'DISPLAY_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', true);
    case 'HIDE_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', false);
    default:
      return state;
  }
}