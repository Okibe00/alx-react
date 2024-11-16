/**
 * @module - notifications
 * @description - handles normalization of notification objects
 */


import * as notificationsTray from '../../notification.json';

/**
 * @param{string} userId - unique idenitifier
 * @returns{array} context - context objects from notifications
 */

export function getAllNotificationsByUsers(userId) {
  const findUser = []
  const notifications = Object.values(notificationsTray);
  notifications.forEach(val => {
    if (Object.assign({}, val.author)['id']  === userId) {
      findUser.push(val.context);
    }
  })
  return findUser;
}