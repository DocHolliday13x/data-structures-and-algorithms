`use strict`;

//? Code Challenge 38: Leaf Weight
const { hasLeafWithWeight, Node } = require('../index.js');

describe('hasLeafWithWeight', () => {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);

  const target = 7;
  console.log(hasLeafWithWeight(root, target)); // true
});








