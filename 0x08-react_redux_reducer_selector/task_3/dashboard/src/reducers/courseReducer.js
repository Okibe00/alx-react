/**
 * @module courseReducer
 * @description contains a reducer for course state
 *
 */
import { Map, setIn, merge } from "immutable";
import { FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";

const initialState = Map();
/**
 * @description - updates the course state
 * @param {list} initialState - state variable
 * @param {object} action - an object of instruction of what has changed/happened
 * @returns {object} new state object
 */
export function courseReducer(initialState = initialState, action) {
  switch (action.type) {
    case "FETCH_COURSE_SUCCESS":
      const actionData = action.data.map((obj) => {
        obj.isSelected = false;
        return obj;
      });
      return initialState.merge(coursesNormalizer(actionData));
    case "SELECT_COURSE":
      var newState = Map(initialState);
      return setIn(
        newState,
        ["entities", "courses", `${action.index}`, "isSelected"],
        true
      );
    case "UNSELECT_COURSE":
      var newState = Map(initialState);
      return setIn(
        newState,
        ["entities", "courses", `${action.index}`, "isSelected"],
        false
      );
    default:
      return initialState;
  }
}
