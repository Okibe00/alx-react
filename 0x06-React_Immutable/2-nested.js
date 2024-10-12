/**
 * return the value of an object at a define path
 */
const { Map } = require('immutable');

function accessImmutableObject(object, array) {
  if (object && array) {
    const isEmtyObj = Object.keys(object).length;
    const isEmtyArr = array.length;
    if (isEmtyArr && isEmtyObj) {
      return Map(object).getIn(array);
    }
    if (isEmtyObj) {
      return Map(object);
    }
  }
  return undefined;
}

module.exports = {
  accessImmutableObject,
};
