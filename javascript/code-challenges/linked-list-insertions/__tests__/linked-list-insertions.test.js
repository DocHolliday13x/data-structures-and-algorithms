`use strict`;

// Imports/Requires
const { LinkedList } = require('../index.js');

// Tests
describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  // Can successfully add a node to the end of the linked list
  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.head.value).toEqual('a');
    list.append('b');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
  });

  // Can successfully add multiple nodes to the end of a linked list
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.head.value).toEqual('a');
    list.append('b');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    list.append('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });

  // Can successfully insert a node before a node located in the middle of a linked list
  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.head.value).toEqual('a');
    list.append('b');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    list.append('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
    list.insertBefore('b', 'd');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('d');
    expect(list.head.next.next.value).toEqual('b');
    expect(list.head.next.next.next.value).toEqual('c');
  });

  // Can successfully insert a node before the first node of a linked list
  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.head.value).toEqual('a');
    list.append('b');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    list.append('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
    list.insertBefore('a', 'd');
    expect(list.head.value).toEqual('d');
    expect(list.head.next.value).toEqual('a');
    expect(list.head.next.next.value).toEqual('b');
    expect(list.head.next.next.next.value).toEqual('c');
  });

  // Can successfully insert after a node in the middle of the linked list
  it('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.head.value).toEqual('a');
    list.append('b');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    list.append('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
    list.insertAfter('b', 'd');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('d');
    expect(list.head.next.next.next.value).toEqual('c');
  });

  // Can successfully insert a node after the last node of the linked list
  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.head.value).toEqual('a');
    list.append('b');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    list.append('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
    list.insertAfter('c', 'd');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
    expect(list.head.next.next.next.value).toEqual('d');
  });

  // Stretch Goal
  // Can successfully delete a node with a given value from the linked list
  it('Can successfully delete a node with a given value from the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.head.value).toEqual('a');
    list.append('b');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    list.append('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
    list.delete('b');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('c');
  });

});








