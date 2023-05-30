`use strict`;

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a Stack class that has a top property. It creates an empty Stack when instantiated.
// This object should be aware of a default empty value assigned to top when the stack is created.
class Stack {
  constructor() {
    this.top = null;
  }

  // Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  // Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
  pop() {
    if (!this.top) { // same fix as line 69 in the Queue class. Testing again.
      // return 'Stack is empty'; // Looks like it worked! Moving on to error on line 87 in my stack test file. //! Ok, so this actually made a whole other error. I'll have to do the same to my peek method.
      throw new Error('Cannot pop from empty stack'); //! This should fix it. It did not fix it. New error code is pointing at my test, so I'm gonnna go look there.
    }

    let temp = this.top;
    this.top = temp.next; // this is failing testing because I'm trying to access the 'next' property of null, just like line 69 in the Queue class was. I'll try the same fix.
    temp.next = null;
    return temp.value;
  }

  // Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
  peek() {
    if (!this.top) {
      // throw new Error('Cannot peek empty stack'); //! Same fix as line 29 above. Fingers crossed, commencing test again.
      // return 'Stack is empty';
      throw new Error('Cannot peek empty stack'); // let's try this again
    }
    return this.top.value;
  }

  // Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
  isEmpty() {
    return this.top === null;
  }
}


// Create a Queue class that has a front property. It creates an empty Queue when instantiated.
// This object should be aware of a default empty value assigned to front when the queue is created.
class Queue {
  constructor() {
    this.front = null;
  }

  // Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  enqueue(value) {
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
    } else {
      let current = this.front;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
  dequeue() {
    if (!this.front) { // I was failing my initial test because line 69 was throwing an error for Cannot read properties of null (reading 'next')
      return 'Queue is empty'; // so I added this if statement to check if 'this.front' is null and return the error message if it is
    }

    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  // Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
  peek() {
    if (!this.front) { // this was also throwing an error for Cannot read properties of null (reading 'value') so I'll try the same fix as line 69
      return 'Queue is empty'; // IT WORKED.
    }
    return this.front.value;
  }

  // Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
  isEmpty() {
    return this.front === null;
  }
}

// Code Challenge 11: Stack Queue Pseudo
// Create a new class called psuedo queue. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // Define a method called enqueue which takes any value as an argument. It then inserts a value into the PseudoQueue, using a first-in, first-out approach.
  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  // Define a method called dequeue that does not take any argument. It then extracts a value from the PseudoQueue, using a first-in, first-out approach.
  dequeue() {
    if (this.stack1.isEmpty()) {
      return null;
    } else {
      return this.stack1.pop();
    }
  }
}



module.exports = {
  // Node,
  Stack,
  Queue,
  PseudoQueue,
};

