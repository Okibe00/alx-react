/**
 * @module - courseReducer
 * @description - test suite for course reducer
 */

import { courseReducer } from "./courseReducer";
  const data = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: true,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ]

describe('course reducer', () => {
  
  test('FETCH_COURSE_SUCCESS should return the data passed', () => {
    const action = {
      type: 'FETCH_COURSE_SUCCESS',
      data: data
    }
    const initialState = []
    const updatedState = courseReducer(initialState, action);
    expect(updatedState.length).toBe(3);
    updatedState.forEach(obj => {
      expect(obj.isSelected).toBeFalsy();
    })
  })

  test('SELECT_COURSE should set the isSelected to true', () => {
    const action = {
      type: 'SELECT_COURSE',
      index: 2
    }
    const updatedState = courseReducer(data, action);
    updatedState.forEach(obj => {
      if (obj.id == 2) {
        expect(obj.isSelected).toBe(true);
      }
    })
  })

  test('UNSELECT_COURSE should set the isSelected to false', () => {
    const action = {
      type: 'UNSELECT_COURSE',
      index: 2
    }
    const updatedState = courseReducer(data, action);
    updatedState.forEach(obj => {
      if (obj.id == 2) {
        expect(obj.isSelected).toBe(false);
      }
    })
  });
})