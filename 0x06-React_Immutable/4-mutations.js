const { Map } = require('immutable');

const MAP = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});
const MAP2 = MAP.withMutations((MAP) => {
  MAP.set('2', 'Benjamin').set('4', 'Oliver');
});

module.exports = {
  MAP,
  MAP2,
};
