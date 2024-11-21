/**
 * @description - test suit for action creators
 */

import { unselectCourse, selectCourse } from "./courseActionCreators";


describe('select and unselect actions', () => {
  test('should return select action with index 1', () => {
    const selectAction = selectCourse(1);
    const unselectAction = unselectCourse(1);  
      expect(selectAction.type).toBe('SELECT_COURSE');
      expect(selectAction.index).toEqual(1);
      expect(unselectAction.type).toBe('UNSELECT_COURSE');
      expect(unselectAction.index).toEqual(1);
  });
  test('should return unselect action with index 1', () => {
    const unselectAction = unselectCourse(1);
      expect(unselectAction.type).toBe('UNSELECT_COURSE');
      expect(unselectAction.index).toEqual(1);
  })
})