`use strict`;

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a Linked List class that has a head property. Upon instantiation, an empty Linked List should be created.
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Define a method called insert which takes any value as an argument, returns nothing, and adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // Define a method called includes which takes any value as an argument, and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }
}

// Exports
module.exports = { Node, LinkedList};
