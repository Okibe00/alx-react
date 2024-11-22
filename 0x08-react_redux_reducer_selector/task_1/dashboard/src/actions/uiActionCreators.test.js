/**
 * @description - test suite for ui actions creators
 */

import { login, logout,displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe('ui action creator ', () => {
  test(' should return LOGIN action', () => {
    const loginAction = login('okibe@pharmabay.ng', 'okibepwd');
    expect(loginAction.type).toEqual('LOGIN');
    expect(loginAction.user.email).toEqual('okibe@pharmabay.ng');
    expect(loginAction.user.password).toEqual('okibepwd');
  });

  test('should return LOGOUT action', () => {
    const logoutAction = logout();
    expect(logoutAction.type).toEqual('LOGOUT');
  });

  test('should return DISPLAY_NOTIFICATION_DRAWER action', () => {
    const displayNotificationDrawerAction = displayNotificationDrawer();
    expect(displayNotificationDrawerAction.type).toEqual('DISPLAY_NOTIFICATION_DRAWER');
  });

  test('should return HIDE_NOTIFICATION_DRAWER action', () => {
    const hideNotificationDrawerAction = hideNotificationDrawer();
    expect(hideNotificationDrawerAction.type).toEqual('HIDE_NOTIFICATION_DRAWER');
  });
})
