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
 * @param{string} userId - unique idenitifier
 * @returns{array} context - context objects from notifications
 */
export function getAllNotificationsByUsers(userId) {
  const findUser = []
  const notifications = Object.values(notificationsTray);
  notificationsTray.forEach( ( val ) => {
    if (val.author.id  === userId) {
      findUser.push(val.context);
    }
  })
  return findUser;
}
