`use strict`;

//? Code Challenge 38: Leaf Weight
// Write a JavaScript function that takes in a binary tree and an integer and checks if there exists a leaf whose path weight equals the given integer. Also include a check to verify that the given values are not null

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor (root = null) {
    this.root = root;
  }
}

function hasLeafWithWeight(root, target) {
  // if root is null, return false
  if (!root || target === null) {
    console.log('Invalid Input: Root or Target is NULL');
    return false;
  }


  function depthFirstSearch(node, sum) {
    if(!node) {
      return false;
    }
    // Update sum w/current node value
    sum += node.value;

    // Check if node is a leaf and the sum matches the target
    if(!node.left && !node.right && sum === target) {
      return true;
    }

    // Recursively call DFS on left and right nodes
    return depthFirstSearch(node.left, sum) || depthFirstSearch(node.right, sum);
  }

  return depthFirstSearch(root, 0);
}



module.exports = {Node, BinaryTree, hasLeafWithWeight};




