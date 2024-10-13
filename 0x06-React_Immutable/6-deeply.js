const { Map } = require('immutable');

function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(page2);
}

module.exports = {
  mergeDeeplyElements,
};
