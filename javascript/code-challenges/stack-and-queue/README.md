# Stack and Queue
<!-- Short summary or background information -->

**Code Challenge 10 - Stack and Queue**
Today's assignment will include a whiteboard of a stack and queue implementation.  The whiteboard will be included in this README.md file. I then have to create a working code implementation of a stack and queue.  I will be using a linked list as the underlying data structure for both the stack and queue. I will be creating a Node class that will have the properties for the value stored in Node, and a pointer to the next node. I will then create a Stack class that has a top property and creates an empty stack when instantiated. Same for a Queue class. Both the Stack and the Queue classes will have methods that I will have to write. I will then create a test file to test the functionality of the Stack and Queue classes.

## Whiteboard Process
<!-- Embedded whiteboard image -->
- ![Whiteboard](/public/codeChallenge10Whiteboard.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Code Challenge 10 - Stack and Queue**
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

## Solution
<!-- Show how to run your code, and examples of it in action -->
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
