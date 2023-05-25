`use strict`;

// Code Challenge 05
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

  // Code Challenge 06
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
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      node.next = current.next;
      current.next = node;
    }
  }

  // Define a method called insert after which add a new node with the given newValue immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.value !== value) {
      current = current.next;
    }
    node.next = current.next;
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
    while (current.next.value !== value) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  // Code Challenge 07
  // Define a method called kthFromEnd which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
  kthFromEnd(k) {
    let current = this.head;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    if (k > length) {
      return 'Exception';
    }
    current = this.head;
    for (let i = 1; i < length - k; i++) {
      current = current.next;
    }
    return current.value;
  }

  // Code Challenge 08
  // Write a function called zipLists which takes two linked lists as arguments, and returns a new linked list with the nodes from each list interwoven.
  // Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the zipped list.
  zipLists(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    const newList = new LinkedList();
    while (current1 || current2) {
      if (current1) {
        newList.append(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        newList.append(current2.value);
        current2 = current2.next;
      }
    }
    return newList;
  }

}

// Exports
module.exports = { Node, LinkedList };
