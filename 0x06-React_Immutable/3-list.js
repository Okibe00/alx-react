const { List } = require('immutable');

function getListObject(array) {
  return (List(array));
}

function addElementToList(list, element) {
  const orgList = List(list);
  return orgList.push(element);
}

module.exports = {
  getListObject,
  addElementToList,
};
