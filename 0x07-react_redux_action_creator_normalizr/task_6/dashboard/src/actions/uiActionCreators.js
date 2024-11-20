/**
 * @description - creates a login action
 * @param {string} email - user email address
 * @param {string} password - users password
 * @return user action {user: { email, password }}
 */
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

/**
 *
 * @param {String} email
 * @param {String} password
 * @returns - {type, user:{email, password}}
 */
export const login = ( email, password ) => {
  return {
    ...LOGIN,
    user: {
      email,
      password
    }
  };
}
/**
 *
 * @returns {type: 'LOGOUT'}
 */
export const logout = () => {
  return {
    ...LOGOUT
  };
}
/**
 *
 * @returns {type: 'HIDE_NOTIFICATION_DRAWER'}
 */
export const hideNotificationDrawer = () => {
  return HIDE_NOTIFICATION_DRAWER;
}
/**
 *
 * @returns {type: 'DISPLAY_NOTIFCATION_DRAWER'}
 */
export const displayNotificationDrawer = () => {
  return DISPLAY_NOTIFICATION_DRAWER;
}

export const boundLogin = (email, password) => dispatch(login(email, password));

export const boundLogout = () => dispatch(logout())

export const boundhideNotificationDrawer = () => dispatch(hideNotificationDrawer())

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
