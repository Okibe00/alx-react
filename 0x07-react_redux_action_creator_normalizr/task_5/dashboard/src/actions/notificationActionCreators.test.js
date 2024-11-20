/**
 * @description - notificationActionCreators.test.js
 */
import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { NotificationTypeFilters } from './notificationActionTypes';

describe('notificationActionCreator', () => {
  test('should return MARK_AS_READ_ACTION', () => {
    const markAsReadAction = markAsRead(1);
    expect(markAsReadAction.type).toEqual('MARK_AS_READ');
    expect(markAsReadAction.index).toEqual(1);
  })

  test('should return SET_TYPE_FILTER', () => {
    const setNotificationFilterAction = setNotificationFilter(NotificationTypeFilters[0]);
    expect(setNotificationFilterAction.type).toEqual('SET_TYPE_FILTER');
    expect(setNotificationFilterAction.filter).toEqual('DEFAULT');
  })
})
