// const { Map, List } = require('immutable');
import { Map, List } from 'immutable';

function concatElements(page1, page2) {
  return (List(page1).concat(List(page2)));
}

function mergeElements(page1, page2) {
  const page1Keys = Object.keys(page1);
  const page2Keys = Object.keys(page2);
  let flag = true;
  if (page1Keys.length === page2Keys.length) {
    for (const key in page1Keys) {
      if (page1[key] !== page2[key]) {
        flag = false;
      }
    }
  }
  if (!flag) {
    return Map(page2);
  }
  return Map(page1).merge(Map(page2));
}

module.exports = {
  concatElements,
  mergeElements,
};
