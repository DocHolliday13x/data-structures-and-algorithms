`use strict`;

// Imports/Requires
const { LinkedList, zipLists } = require('../index.js');

// Tests
describe('Linked List', () => {
  // Code Challenge 05 Tests
  // 1. Can successfully instantiate an empty linked list
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  // Code Challenge 05 Tests
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
  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.append('d');
    expect(list.toString()).toEqual('{ c } -> { b } -> { a } -> { d } -> NULL');
  });

  // Can successfully add multiple nodes to the end of a linked list
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.append('d');
    list.append('e');
    expect(list.toString()).toEqual(
      '{ c } -> { b } -> { a } -> { d } -> { e } -> NULL'
    );
  });

  // Can successfully insert a node before a node located i the middle of a linked list
  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertBefore('b', 'd');
    expect(list.toString()).toEqual('{ c } -> { d } -> { b } -> { a } -> NULL');
  });

  // Can successfully insert a node before the first node of a linked list
  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertBefore('c', 'd');
    expect(list.toString()).toEqual('{ d } -> { c } -> { b } -> { a } -> NULL');
  });

  // Can successfully insert after a node in the middle of the linked list
  it('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertAfter('b', 'd');
    expect(list.toString()).toEqual('{ c } -> { b } -> { d } -> { a } -> NULL');
  });

  // Can successfully insert a node after the last node of the linked list
  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertAfter('a', 'd');
    expect(list.toString()).toEqual('{ c } -> { b } -> { a } -> { d } -> NULL');
  });

  // Stretch Goal
  // Can successfully delete a node with a given value from the linked list
  it('Can successfully delete a node with a given value from the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.delete('b');
    expect(list.toString()).toEqual('{ c } -> { a } -> NULL');
  });

  // Code Challenge 07 Tests

  // Code Challenge 08 Tests
  // Can successfully zip two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list
  it('Can successfully zip two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.insert('a');
    list1.insert('b');
    list1.insert('c');
    list2.insert('1');
    list2.insert('2');
    list2.insert('3');

    const zippedList = zipLists(list1, list2);
    expect(zippedList.head.value).toEqual('a');
    expect(zippedList.head.next.value).toEqual('1');
    expect(zippedList.head.next.next.value).toEqual('b');
    expect(zippedList.head.next.next.next.value).toEqual('2');
    expect(zippedList.head.next.next.next.next.value).toEqual('c');
    expect(zippedList.head.next.next.next.next.next.value).toEqual('3');
    expect(zippedList.head.next.next.next.next.next.next).toBeNull();
  });

});
