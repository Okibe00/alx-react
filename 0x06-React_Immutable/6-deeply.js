const { Map, List } = require('immutable');

function mergeDeeplyElements(page1, page2) {
  const firstPage = Map(page1);
  const secondPage = Map(page2);
  const mergedPage = firstPage.mergeDeep(secondPage);
  // return List(mergedPage);
  const lis = List([mergedPage.toJS()]);
  return lis;
}

module.exports = {
  mergeDeeplyElements,
};
