/**
 * @module - notifications
 * @description - handles normalization of notification objects
 */


import notificationsTray from '../../notificationData';
import { normalize, schema } from 'normalizr';

//normalizer entities
export const user = new schema.Entity('users');
export const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
export const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationsTray, [notification]);

/**
 * @param{string} userId - unique user idenitifier
 * @returns{array} context - context objects from notifications
 */
export function getAllNotificationsByUsers(userId) {
  const findUser = []
  const notificationObject = normalizedData.entities.notifications;
  for (const val in notificationObject) {
    if (notificationObject[val].author === userId) {
      const messageId = notificationObject[val].context;
      const comment = normalizedData.entities.messages[messageId]
      findUser.push(comment);
      
    }
  }
  return findUser;
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
const notificationListSchema = new schema.Entity('notifications');
// const filterSchema = new schema.Entity('filter');
const notificationSchema = new schema.Object({
  notifications: [notificationListSchema]
})
export function notificationNormalizer(data) {
  return normalize(data, notificationSchema);
}

