# Stack and Queue
<!-- Short summary or background information -->

**Code Challenge 10 - Stack and Queue**
Today's assignment will include a whiteboard of a stack and queue implementation.  The whiteboard will be included in this README.md file. I then have to create a working code implementation of a stack and queue.  I will be using a linked list as the underlying data structure for both the stack and queue. I will be creating a Node class that will have the properties for the value stored in Node, and a pointer to the next node. I will then create a Stack class that has a top property and creates an empty stack when instantiated. Same for a Queue class. Both the Stack and the Queue classes will have methods that I will have to write. I will then create a test file to test the functionality of the Stack and Queue classes.

**Code Challenge 11 - PsuedoQueue**
Today's assignment is simply to add a PsuedoQueue class to implement a queue using two stacks. I will include my whiteboard for this process below. Then I will go into my index.js file where I will create a new class called PsuedoQueue. I will then create a new instance of the Stack class for the first stack and a new instance of the Stack class for the second stack. I will then create the required methods for the PsuedoQueue class. No additional tests need to be written for today's assignment.

**Code Challenge 12 - Stack Queue Animal Shelter**
Today's assignment is to create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach. I will create a whiteboard for this process and then create a new class called AnimalShelter. I will then create a new instance of the Queue class. I will then create the required methods for the AnimalShelter class. No additional tests need to be written for today's assignment.

## Whiteboard Process
<!-- Embedded whiteboard image -->
- **Code Challenge 10**

- ![Whiteboard](/public/codeChallenge10Whiteboard.png)

- **Code Challenge 11**

- ![Whiteboard](/public/codeChallenge11whiteboard.png)

- **Code Challenge 12**

- ![Whiteboard](/public/codeChallenge12Whiteboard.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- **Code Challenge 10 - Stack and Queue**
I started with a whiteboard of the stack and queue implementation. I then created a Node class, a Stack class and a Queue class that will use the Node class. I then created a test file to test the functionality of the Stack and Queue classes and the methods I create. I'll have to plug my methods into Chat GPT to get the Big O space/time for this approach. The following methods will have a Big O space/time complexity:

- `push()` - O(1)
- `pop()` - O(1)
- `peek()` - O(1)
- `isEmpty()` - O(1)
- `enqueue()` - O(1)
- `dequeue()` - O(1)
- `peek()` - O(1)
- `isEmpty()` - O(1)

I didn't actually run the Big O space/time complexity on the methods above. I just assumed they would be O(1) because they are all constant time operations.

- **Code Challenge 11 - PsuedoQueue**
I started with a whiteboard of the PsuedoQueue implementation. I then created a PsuedoQueue class that will use two Stack classes. I then created the required methods for the PsuedoQueue class. I'll have to plug my methods into Chat GPT to get the Big O space/time for this approach. The following methods will have a Big O space/time complexity:

- `enqueue()` - O(n)
- `dequeue()` - O(n)

- **Code Challenge 12 - Stack Queue Animal Shelter**
I started with a whiteboard of the AnimalShelter implementation. I then created an AnimalShelter class that will use a Queue class. I then created the required methods for the AnimalShelter class. I'll have to plug my methods into Chat GPT to get the Big O space/time for this approach. The following methods will have a Big O space/time complexity:

- `enqueue()` - O(n)
- `dequeue()` - O(n)


## Solution
<!-- Show how to run your code, and examples of it in action -->

- **Code Challenge 10 - Stack and Queue**

1. To allow for testing, I created a `index.js` file and a `stack.test.js` file as well as a `queue.test.js` file and ran the following commands in my terminal to allow for jest testing:
   - `npm init -y`
   - `npm i jest`
   - `npm test`

2. I went in to my new package.json file and replaced the scripts object with the following line: `"test": "jest --verbose --coverage"`

3. I created my classes, `Node` and `Stack` and `Queue` in the `index.js' file per instruction.

4. I created the required methods for both the `Stack` and `Queue` classes.

5. I wrote the tests for the methods in the `stack.test.js` file and the `queue.test.js` file.

6. I ran the tests in the terminal using the command `npm test`.

7. I failed multiple tests and had to debug my code until all tests passed. I left comments describing my process and will eventually clean those up.

8. Screenshot of my terminal after all tests passed:

   - ![Terminal](/public/codeChallenge10Tests.png)

9. I'm all done. Time to call it a day.

   - ![SipSip](https://media.giphy.com/media/Wn74RUT0vjnoU98Hnt/giphy.gif)

- **Code Challenge 11 - PsuedoQueue**

1. I created a new class called `PsuedoQueue` in my `index.js` file.

2. I created a new instance of the `Stack` class for the first stack and a new instance of the `Stack` class for the second stack.

3. I created the required methods for the `PsuedoQueue` class.

4. That's it. No additional tests need to be written for today's assignment.

- **Code Challenge 12 - Stack Queue Animal Shelter**

1. I created a new class called `Animal` in my `index.js` file.

2. I created a new class called `AnimalShelter` in my `index.js` file.

3. I created a new instance of the `Queue` class.

4. I created the required methods for the `AnimalShelter` class.
