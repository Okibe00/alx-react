const { Map } = require('immutable');

function mergeDeeplyElements(page1, page2) {
  const m1 = Map(page1);
  const m2 = Map(page2);

  const merged = m1.mergeDeep(m2);
  return (merged);
}

module.exports = {
  mergeDeeplyElements,
};

// const { Map, List } = require('immutable');

// function mergeDeeplyElements(page1, page2) {
//   // Convert both objects into Immutable Maps
//   const map1 = Map(page1);
//   const map2 = Map(page2);

//   // Deeply merge the two maps
//   const mergedMap = map1.mergeDeep(map2);

//   // Extract the values of the merged map and convert them to an Immutable List
//   return List(mergedMap.valueSeq());
// }

// module.exports = {
//   mergeDeeplyElements,
// };
