`use strict`;

// Imports/Requires
const { Queue } = require('../index.js');

// Tests
describe('Queue', () => {
  // Code Challenge 10 Tests
  // 1. Can successfully enqueue into a queue
  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.front.value).toEqual('a');
    queue.enqueue('b');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
  });

  // 2. Can successfully enqueue multiple values into a queue
  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.front.value).toEqual('a');
    queue.enqueue('b');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
    queue.enqueue('c');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
    expect(queue.front.next.next.value).toEqual('c');
  });

  // 3. Can successfully dequeue out of a queue the expected value
  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.front.value).toEqual('a');
    queue.enqueue('b');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
    queue.enqueue('c');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
    expect(queue.front.next.next.value).toEqual('c');
    expect(queue.dequeue()).toEqual('a');
    expect(queue.front.value).toEqual('b');
    expect(queue.dequeue()).toEqual('b');
    expect(queue.front.value).toEqual('c');
    expect(queue.dequeue()).toEqual('c');
    expect(queue.front).toBeNull();
  });

  // 4. Can successfully peek into a queue, seeing the expected value
  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.front.value).toEqual('a');
    queue.enqueue('b');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
    queue.enqueue('c');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
    expect(queue.front.next.next.value).toEqual('c');
    expect(queue.peek()).toEqual('a');
    expect(queue.front.value).toEqual('a');
  });

  // 5. Can successfully empty a queue after multiple dequeues
  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.front.value).toEqual('a');
    queue.enqueue('b');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
    queue.enqueue('c');
    expect(queue.front.value).toEqual('a');
    expect(queue.front.next.value).toEqual('b');
    expect(queue.front.next.next.value).toEqual('c');
    expect(queue.dequeue()).toEqual('a');
    expect(queue.front.value).toEqual('b');
    expect(queue.dequeue()).toEqual('b');
    expect(queue.front.value).toEqual('c');
    expect(queue.dequeue()).toEqual('c');
    expect(queue.front).toBeNull();
  });

  // 6. Can successfully instantiate an empty queue
  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toBeNull();
  });

  // 7. Calling dequeue or peek on empty queue raises exception
  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toEqual('Queue is empty');
    expect(queue.peek()).toEqual('Queue is empty');
  });
});


