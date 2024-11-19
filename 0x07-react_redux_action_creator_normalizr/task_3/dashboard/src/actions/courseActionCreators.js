/**
 * @module courseActionCreator
 * @description - contains function for creating actions
 */

import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'
/**
 * @description - creates a select course action
 * @param {number} index - index of course to select
 * @returns {object} - object of shape {type,index}
 */

export const selectCourse = (index) => {
  return {
    ...SELECT_COURSE,
    index
  } 
}

/**
 * @description - creates an unselect course action
 * @param {number} index - index of course to select
 * @returns {object} - object of shape {type,index}
 */

export const unselectCourse = (index) => {
  return {
    ...UNSELECT_COURSE,
    index
  } 
}