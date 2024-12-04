/**
 * @module - courseReducer
 * @description - test suite for course reducer
 */

import { coursesNormalizer } from "../schema/courses";
import { courseReducer } from "./courseReducer";
import { Map } from "immutable";
const data = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: true,
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40,
  },
];
const normalizedData = coursesNormalizer(data);
// console.log(normalizedData.entities);
describe("course reducer", () => {
  test("FETCH_COURSE_SUCCESS should return the data passed", () => {
    const action = {
      type: "FETCH_COURSE_SUCCESS",
      data: data,
    };
    const initialState = Map();
    const updatedState = courseReducer(initialState, action);
    const jsObject = updatedState.toJS();
    const numOfCourses = Object.keys(jsObject.entities.courses).length;
    const courses = jsObject.entities.courses;
    expect(numOfCourses).toBe(3);
    // console.log(jsObject.entities.courses);
    for (let obj in courses) {
      expect(courses[obj].isSelected).toBe(false);
      // console.log(courses[obj]);
    }
  });
  test("SELECT_COURSE should set the isSelected to true", () => {
    const action = {
      type: "SELECT_COURSE",
      index: 1,
    };
    const mapState = courseReducer(normalizedData, action);
    const jsObject = mapState.toJS();
    expect(
      jsObject
      .entities
      .courses[action.index]
      .isSelected
    ).toBe(true);
  });

  test("UNSELECT_COURSE should set the isSelected to false", () => {
    const action = {
      type: "UNSELECT_COURSE",
      index: 2,
    };
    const mapState = courseReducer(normalizedData, action);
    const jsObject = mapState.toJS();
    expect(
      jsObject
      .entities
      .courses[action.index]
      .isSelected).toBe(false);
  });
});