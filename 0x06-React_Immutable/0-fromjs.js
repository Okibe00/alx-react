/**
 * @module - creates an immutable Map object
 */
const { fromJS } = require('immutable');

/**
 * creates an immutable mao object
 * @param { Object{} }: object
 * @Return { Object{} }: immutable Map object
 */

function getImmutableObject(object) {
  return fromJS(object);
}
module.exports = {
  getImmutableObject,
};
