import { Map } from 'immutable';

function getImmutableObject(obj) {
  return Map(obj);
}
module.exports = {
  getImmutableObject,
};
