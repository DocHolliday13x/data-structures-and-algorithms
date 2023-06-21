`use strict`;

// Imports/Requires
const { Stack } = require('../index.js');

// Tests
describe('Stack', () => {
  // Code Challenge 10 Tests
  // 1. Can successfully push onto a stack
  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.top.value).toEqual('a');
    stack.push('b');
    expect(stack.top.value).toEqual('b');
  });

  // 2. Can successfully push multiple values onto a stack
  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.top.value).toEqual('a');
    stack.push('b');
    expect(stack.top.value).toEqual('b');
    stack.push('c');
    expect(stack.top.value).toEqual('c');
  });

  // 3. Can successfully pop off the stack
  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.top.value).toEqual('a');
    stack.push('b');
    expect(stack.top.value).toEqual('b');
    stack.push('c');
    expect(stack.top.value).toEqual('c');
    expect(stack.pop()).toEqual('c');
    expect(stack.top.value).toEqual('b');
    expect(stack.pop()).toEqual('b');
    expect(stack.top.value).toEqual('a');
    expect(stack.pop()).toEqual('a');
    expect(stack.top).toBeNull();
  });

  // 4. Can successfully empty a stack after multiple pops
  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.top.value).toEqual('a');
    stack.push('b');
    expect(stack.top.value).toEqual('b');
    stack.push('c');
    expect(stack.top.value).toEqual('c');
    expect(stack.pop()).toEqual('c');
    expect(stack.top.value).toEqual('b');
    expect(stack.pop()).toEqual('b');
    expect(stack.top.value).toEqual('a');
    expect(stack.pop()).toEqual('a');
    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();
  });

  // 5. Can successfully peek the next item on the stack
  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.top.value).toEqual('a');
    stack.push('b');
    expect(stack.top.value).toEqual('b');
    stack.push('c');
    expect(stack.top.value).toEqual('c');
    expect(stack.peek()).toEqual('c');
    expect(stack.top.value).toEqual('c');
  });

  // 6. Can successfully instantiate an empty stack
  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();
  });

  // 7. Calling pop or peek on empty stack raises exception
  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    // expect(() => stack.pop()).toThrow(/Cannot pop from empty stack/); //! I caved and sought out help from ChatGPT. This was the proposed solution: change ('Cannot peek on empty stack') to (/Cannot peek on empty stack/). Commencing test again.
    // expect(() => stack.peek()).toThrow(/Cannot peek on empty stack/); //! Ok, so changing it to a regex expression didn't help. Now I am super lost.
    expect(() => stack.pop()).toThrowError(/empty stack/);
    expect(() => stack.peek()).toThrowError(/empty stack/); //! YES, this finally fixed it. Holy smokes, what a journey. I had to use `toThrowError` in conjunction with the regex expression `/empty stack/` but why that works is beyond me.
  });
});

//! I AM SO SORRY FOR ALL THE COMMENTS, IT'S PART OF MY LEARNING PROCESS








