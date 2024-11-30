/**
 * @description - creates a login action
 * @param {string} email - user email address
 * @param {string} password - users password
 * @return user action {user: { email, password }}
 */
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import fetch from 'node-fetch';

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

export const loginSuccess = () => {
  return LOGIN_SUCCESS;
}

export const loginFailure = () => {
  return LOGIN_FAILURE;
}


//binding action creators
export const boundLogin = (email, password) => dispatch(login(email, password));

export const boundLogout = () => dispatch(logout())

export const boundhideNotificationDrawer = () => dispatch(hideNotificationDrawer())

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export const boundLoginSuccess = () => {dispatch(loginSuccess())}

export const boundLoginFailure = () => {dispatch(loginFailure())}

//login thunk
export const loginRequest = async (email, password) => {
  boundLogin(email, password);
  try {
    const res = await fetch('/login-success.js');
    if (res.status === 200) {
      boundLoginSuccess();
    } else {
      boundLoginFailure();
    }
  } catch(error) {
    console.error(error);
  }
}
