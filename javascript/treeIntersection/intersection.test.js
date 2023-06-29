`use strict`;

const treeIntersection = require('./intersection.js');
const Tree = require('../trees/index.js');
// const HashTable = require('../hashtable/hashtable.js');

describe('Tree Intersection', () => {
  test('should return an array of values found in both trees', () => {
    const tree1 = new Tree([1, 2, 3, 4, 5, 6]);
    const tree2 = new Tree([5, 6, 7, 8, 9, 10]);
    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([5, 6]);
  });
});
