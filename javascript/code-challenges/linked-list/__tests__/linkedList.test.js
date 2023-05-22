`use strict`;

// Imports/Requires
const { LinkedList } = require('../index.js');

// Tests
describe('Linked List', () => {
  // Code Challenge 05 Tests
  // 1. Can successfully instantiate an empty linked list
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  // 2. Can properly insert into the linked list
  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.head.value).toEqual('a');
    list.insert('b');
    expect(list.head.value).toEqual('b');
    expect(list.head.next.value).toEqual('a');
  });

  // 3. The head property will properly point to the first node in the linked list
  it('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.head.value).toEqual('a');
    list.insert('b');
    expect(list.head.value).toEqual('b');
    expect(list.head.next.value).toEqual('a');
  });

  // 4. Can properly insert multiple nodes into the linked list
  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.head.value).toEqual('a');
    list.insert('b');
    expect(list.head.value).toEqual('b');
    expect(list.head.next.value).toEqual('a');
    list.insert('c');
    expect(list.head.value).toEqual('c');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('a');
  });

  // 5. Will return true when finding a value within the linked list that exists
  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('a')).toBeTruthy();
    expect(list.includes('b')).toBeTruthy();
    expect(list.includes('c')).toBeTruthy();
  });

  // 6. Will return false when searching for a value in the linked list that does not exist
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('d')).toBeFalsy();
  });

  // 7. Can properly return a collection of all the values that exist in the linked list
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toEqual('{ c } -> { b } -> { a } -> NULL');
  });

  // Code Challenge 06 Tests
  // Can successfully add a node to the end of the linked list

  // Can successfully add multiple nodes to the end of a linked list

  // Can successfully insert a node before a node located i the middle of a linked list

  // Can successfully insert a node before the first node of a linked list

  // Can successfully insert after a node in the middle of the linked list

  // Can successfully insert a node after the last node of the linked list

  // Stretch Goal
  // Can successfully delete a node with a given value from the linked list

});




