/**
 * @module - utils for working for creating immunatable objects
 */
const { Map } = require('immutable');

function getImmutableObject(obj) {
  return Map(obj);
}
module.exports = {
  getImmutableObject,
};
