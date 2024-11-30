/**
 * @module - notificationReducer
 * @description - updates the notifiation slice of state
 */


const initialState = {
  notitifications: [],
  filter: 'DEFAULT'
}

/**
 * 
 * @param {object} initialState - the state object
 * @param {object} action - hold the details of what changed 
 * @returns new state object 
 */
export const notificationReducer = (initialState, action) => {
  switch(action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
      var newNotifications = {...initialState}
      newNotifications.notifications.forEach(notification => {
        notification.isRead = false;
      })
      return newNotifications;
    case 'MARK_AS_READ':
      var newNotifications = {...initialState}
        newNotifications.notifications.forEach(notification => {
        if (notification.id === action.index) {
          notification.isRead = true;
          // return notification;
        }
      });
      return newNotifications;
    case 'SET_TYPE_FILTER':
      var newNotifications = {...initialState};
      newNotifications.filter = action.filter;
      return newNotifications;   
    default:
      return initialState;
  }
}