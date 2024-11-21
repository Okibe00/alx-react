/**
 * @module - uiReducer
 * @description - app UI reducer
 */
import { LOGIN, LOGIN_FAILURE, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from '../actions/uiActionTypes';

initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  }


/**
 * updates the app state
 * @param {Object} state - app state object
 * @param {object} action - action objects
 */
export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        isUserLoggedIn: false
      };
    case 'LOGIN':
      break;
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isUserLoggedIn:false
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isUserLoggedIn: true
      };
    case 'DISPLAY_NOTIFICATION_DRAWER':
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
    case 'HIDE_NOTIFICATION_DRAWER':
      return {
        ...state,
        isNotificationDrawerVisible: false
      };
    default:
      return state;
  }
}
