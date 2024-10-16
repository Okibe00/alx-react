import { fromJS } from 'immutable';
// const { Map } = require('immutable');

function getImmutableObject(object) {
  return fromJS(object);
}
module.exports = {
  getImmutableObject,
};
