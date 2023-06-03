# Stack and Queue
<!-- Short summary or background information -->

**Code Challenge 15 - Trees**
Today's assignment will include a whiteboard of the Binary Search Tree implementation using a Node class, a Tree class, a Binary Search Tree class, and a Binary Search Tree test file. The Binary Search Tree class will have the following methods:

- `add(value)` - Adds a new node with that value in the correct location in the binary search tree.
- `contains(value)` - Returns a boolean indicating whether or not the value is in the tree at least once.

The following methods were implemented with our class Tree:

- `preOrder()` - Returns an array of the values, ordered appropriately.
- `inOrder()` - Returns an array of the values, ordered appropriately.
- `postOrder()` - Returns an array of the values, ordered appropriately.

## Colloborators

- Reece Renninger

## Whiteboard Process
<!-- Embedded whiteboard image -->
- **Code Challenge 15**

- ![Whiteboard](/public/codeChallenge15Whiteboard.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- **Code Challenge 15 - Trees**
I started by colloborating on a whiteboard with Reece Renninger. Our whiteboard is embedded above. I then created a Node class, a Tree class, a Binary Search Tree class, and a Binary Search Tree test file. Then I then created the required methods for the Binary Search Tree class. I'll have to plug my methods into Chat GPT to get the Big O space/time for this approach. The following methods will have a Big O space/time complexity:

- `preOrder()` - O(n)
- `inOrder()` - O(n)
- `postOrder()` - O(n)
- `add(value)` - O(h) O(log n)
- `contains(value)` - O(h) O(log n)

## Solution
<!-- Show how to run your code, and examples of it in action -->

- **Code Challenge 15 - Trees**

1. To allow for testing, I created a `index.js` file and a `trees.test.js` file inside of a test folder, and ran the following commands in my terminal to allow for jest testing:
   - `npm init -y`
   - `npm i jest`
   - `npm test`

2. I went in to my new package.json file and replaced the scripts object with the following line: `"test": "jest --verbose --coverage"`

3. I created my classes, `Node` and `Tree` and `BinarySearchTree` in the `index.js' file per instruction.

4. I created the required methods for both the `Tree` and `BinarySearchTree` classes.

5. I wrote the tests for the methods in the `trees.test.js` file.

6. I ran the tests in the terminal using the command `npm test`.

7. All tests passed.

- ![Terminal](/public/codeChallenge15Tests.png)

- ![Trees](https://media.giphy.com/media/SgvQmElxQgMqmdXSY2/giphy.gif)
