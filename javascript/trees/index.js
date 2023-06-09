`use strict`;

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// not required for Code challenge 15
class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k).fill(null);
  }
}

// not required for Code challenge 15
class KaryTree {
  constructor() {
    this.root = null;
  }

  // Need to add a method that takes in a value and adds a new node to the tree
  // add(value) {
  //   const newNode = new KaryNode(value, 3);

  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }

  //   const _traverse = (node) => {
  //     for (let i = 0; i < node.children.length; i++) {
  //       if (!node.children[i]) {
  //         node.children[i] = newNode;
  //         return;
  //       }
  //     }
  //     for (let i = 0; i < node.children.length; i++) {
  //       if (node.children[i]) {
  //         _traverse(node.children[i]);
  //       }
  //     }
  //   };
  //   _traverse(this.root);
  //   return this;
  // }

  // Code Challenge 18: FizzBuzz Tree
  fizzBuzzTree(karyTree) {
    if (!karyTree.root) {
      return [];
    }

    const results = [];

    const _traverse = (node) => {
      let value;

      if (node.value % 3 === 0 && node.value % 5 === 0) {
        value = 'FizzBuzz';
      } else if (node.value % 3 === 0) {
        value = 'Fizz';
      } else if (node.value % 5 === 0) {
        value = 'Buzz';
      } else {
        value = node.value.toString();
      }

      results.push(value);

      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i]) {
          _traverse(node.children[i]);
        }
      }
    };

    _traverse(karyTree.root);
    return results;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const results = [];

    // defining helper our function
    const traverse = (node) => {
      // base case (do the thing)
      results.push(node.value);

      // left and right recursive cases
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      //IF there is no left and no right WE ARE DONE WITH THIS FUNCTION
    };
    // START THE RECURSIVE STUFF HERE
    traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value); // performing our base case here makes this inOrder
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      results.push(node.value); // performing our base case here makes this postOrder
    };
    traverse(this.root);
    return results;
  }
}

class BinarySearchTree extends Tree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    const insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        } else if (node.left !== null) {
          return insert(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
          return this;
        } else if (node.right !== null) {
          return insert(node.right);
        }
      } else {
        return null;
      }
    };
    insert(this.root);
  }

  containsValue(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // value === current.value
        found = true;
      }
    }
    if (!found) {
      return false;
    }
    return true;
  }

  // Code Challenge 16: Find the Maximum Value in a Binary Tree
  findMaxValue() {
    if (this.root === null) {
      return null;
    }

    let current = this.root;
    let maxValue = current.value;

    while (current) {
      maxValue = current.value;
      current = current.right;
    }
    return maxValue;
  }

}

// Code Challenge 17: Breadth First Traversal
class BFT {
  breadthFirst(tree) {
    if (tree.root === null) {
      return null;
    }

    const queue = [];
    const results = [];

    queue.push(tree.root);

    while (queue.length) {
      let current = queue.shift();
      results.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
    return results;
  }
}

module.exports = {
  Node,
  Tree,
  BinarySearchTree,
  BFT,
  KaryNode,
  KaryTree,
};

// let tree = new Tree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(8);
// tree.root.right.right = new Node(17);
// console.log('-------preOrder-------');
// let results = tree.preOrder();
// console.log('preOrder results:', results);
// console.log('-------inOrder-------');
// results = tree.inOrder();
// console.log('inOrder results:', results);
// console.log('-------postOrder-------');
// results = tree.postOrder();
// console.log('postOrder results:', results);
