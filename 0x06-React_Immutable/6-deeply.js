const { Map } = require('immutable');

function mergeDeeplyElements(page1, page2) {
  const m1 = Map(page1);
  const m2 = Map(page2);

  const merged = m1.mergeDeep(m2);
  return (merged.toJS());
}

module.exports = {
  mergeDeeplyElements,
};
