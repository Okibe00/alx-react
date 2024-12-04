/**
 * @module - notificationSelector
 * @description selectors for accessing pieces of state
 */

/**
 * selectors take state as an argument
 * function(state) {
 *    return piece of state;
 * }
 * 
 * 
 */
import { Seq, Map } from 'immutable';
/**
 * 
 * @param {Map} state 
 * @returns value of filter;
 */
export const filterTypeSelected = (state) => {
  console.log(state.toJS());
  return state.getIn(['result', 'filter']);
} 

/**
 * 
 * @param {Map} state 
 * @returns notifications list
 */
export const getNotifications = (state) => {
  // console.log()
  const notificationsId = state.getIn(['result', 'notifications']); 
  return notificationsId.map(key => {
    const obj = state.getIn(['entities', 'notifications', key]);
    return Map(obj);
  });
}

export const getUnreadNotifications = (state) => {
  /**
   * loop through notification list and filter for unread notification
    state structure {
      entities: {
        notifications: {
         1: {},
         2: {},
         ...
        }
      }
      result:{
        filter: ''
        notifiations: [id , id , id ]
      }
    } 
  */

  const notificationsId = state.getIn(['result', 'notifications']); 
  return notificationsId.map(key => {
    const obj = state.getIn(['entities', 'notifications', key]);
    if (obj.isRead === false)
      return obj;
    })



}



