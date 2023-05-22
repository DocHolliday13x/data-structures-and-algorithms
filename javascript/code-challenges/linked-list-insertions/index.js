`use strict`;

// Create a Node Class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a Linked List Class that has a head property. Upon instantiation, an empty Linked List should be created.
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Define a method called append which adds a new node with the given value to the end of the list
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // Define a method called insert before which adds a new node with the given newValue immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
    current.next = node;
  }

  // Define a method called insert after which add a new node with the given newValue immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
    current.next = node;
  }

  // Code Challenge 06 Stretch Goal
  // Define a method called delete which deletes a node with the given value from the linked list
  delete(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

// Exports
module.exports = { Node, LinkedList};




