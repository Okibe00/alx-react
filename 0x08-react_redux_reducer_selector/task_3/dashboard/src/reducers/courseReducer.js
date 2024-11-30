/**
 * @module courseReducer
 * @description contains a reducer for course state
 * 
 */
import { List, Map } from 'immutable';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const initialState = [];
/**
 * @description - updates the course state
 * @param {list} initialState - state variable
 * @param {object} action - an object of instruction of what has changed/happened
 * @returns {object} new state object
 */
export function courseReducer(initialState, action) {

  switch(action.type) {
    case 'FETCH_COURSE_SUCCESS':
      const actionData = action.data.map(obj => {
        obj.isSelected = false
        return obj;
      });
      return [...initialState, ...actionData];
      case 'SELECT_COURSE':
        return initialState.map(obj => {
          if (obj.id === action.index) {
            obj.isSelected = true;
            return obj;
          } else {
            return obj;
          }
        })
        case 'UNSELECT_COURSE':
          initialState.map(obj => {
            if (obj.id === action.index) {
              obj.isSelected = false;
              return obj;
            } else {
              return obj;
            }
          });
        default:
          return initialState;
  }
}