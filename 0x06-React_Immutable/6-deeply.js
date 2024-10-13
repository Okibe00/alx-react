const { Map, List } = require('immutable');

function mergeDeeplyElements(page1, page2) {
  return List(Map(page1).mergeDeep(page2).valueSeq());
}

module.exports = {
  mergeDeeplyElements,
};
