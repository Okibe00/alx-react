/**
 * @description - define action creators
 */
import store from '../../store_dir';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 *
 * @param {Number} index
 * @returns {type: 'MARK_AS_READ', index}
 */
export const markAsRead = (index) => {
  return {
    ...MARK_AS_READ,
    index
  }
}
/**
 *
 * @param {String} filter
 * @returns {type: 'SET_TYPE_FILTER, filter: DEFAULT | URGENT'}
 */
export const setNotificationFilter = (filter) => {
  return {
    ...SET_TYPE_FILTER,
    filter
  }
}

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundsetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));
