/**
 * @module - notificationReducer
 * @description - updates the notifiation slice of state
 */
import { Map, setIn } from "immutable"
import { notificationNormalizer } from "../schema/notifications"

const initialState = {
  notitifications: [],
}
/**
 * @param {object} action - hold the details of what changed 
 * @returns new state object 
 */
export const notificationReducer = (initialState, action) => {
  switch(action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
      var newNotifications = {...initialState};
      newNotifications.notifications.push(...action.data)
      newNotifications.notifications.forEach(notification => {
        notification.isRead = false;
      });
      const normalizedState = notificationNormalizer(newNotifications);
      const mapState = Map(normalizedState);
      return mapState;
    case 'MARK_AS_READ':
      var newNotifications = {...initialState}
      newNotifications = notificationNormalizer(newNotifications);
      newNotifications = Map(newNotifications);
      return setIn(
        newNotifications,
        ['entities', 'notifications',`${action.index}`, 'isRead']
        , true);
    case 'SET_TYPE_FILTER':
      var newNotifications = {...initialState};
      newNotifications = Map(notificationNormalizer(newNotifications));
      return setIn(newNotifications, ['result', 'filter'], action.filter);
    default:
      return initialState;
  }
}