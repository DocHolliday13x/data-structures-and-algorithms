`use strict`;

// Imports/Requires
const { Queue, AnimalShelter, validateBrackets } = require('../index.js');

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

  // Code Challenge 12 Tests
  // 1. Can successfully add animals to correct queue
  xit('Can successfully add animals to correct queue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('cat');
    expect(shelter.cat.front.value).toEqual('cat');
    shelter.enqueue('dog');
    expect(shelter.dog.front.value).toEqual('dog');
  });

  // Code Challenge 13 Tests
  // 1. Can successfully validate brackets
  it('Can successfully validate brackets', () => {
    const result = validateBrackets('([]{})');
    expect(result).toBe(true);
  });

  it('Returns false for unbalanced brackets', () => {
    const result = validateBrackets('[({)}]');
    expect(result).toBe(false);
  });

  it('Returns true for an empty string', () => {
    const result = validateBrackets('');
    expect(result).toBe(true);
  });

  it('Can validate brackets with other characters', () => {
    const result = validateBrackets('a(b[c]d)e{f}');
    expect(result).toBe(true);
  });

  it('Returns false when only opening brackets are present', () => {
    const result = validateBrackets('({[');
    expect(result).toBe(false);
  });

  xit('Returns false when only closing brackets are present', () => {
    const result = validateBrackets(')}]');
    expect(result).toBe(false);
  });

  it('Returns false for more opening brackets than closing brackets', () => {
    const result = validateBrackets('[({})');
    expect(result).toBe(false);
  });

  xit('Returns false for more closing brackets than opening brackets', () => {
    const result = validateBrackets('({})]');
    expect(result).toBe(false);
  });


});


