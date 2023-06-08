# Trees
<!-- Short summary or background information -->

**Code Challenge 15 - Trees**
Today's assignment will include a whiteboard of the Binary Search Tree implementation using a Node class, a Tree class, a Binary Search Tree class, and a Binary Search Tree test file. The Binary Search Tree class will have the following methods:

- `add(value)` - Adds a new node with that value in the correct location in the binary search tree.
- `contains(value)` - Returns a boolean indicating whether or not the value is in the tree at least once.

The following methods were implemented with our class Tree:

- `preOrder()` - Returns an array of the values, ordered appropriately.
- `inOrder()` - Returns an array of the values, ordered appropriately.
- `postOrder()` - Returns an array of the values, ordered appropriately.

**Code Challenge 16 - Find Maximum Value in a Binary Tree**
Today's assignment will be a continuation of the previous assignment. We will be adding a new method to the Binary Search Tree class called `findMaximumValue()`. This method will take no arguments, and return the maximum value in the binary search tree. We will start with our whiteboard process, then create a new method in our Binary Search Tree class, and finally write tests for our new method.

**Code Challenge 17 - Breadth First Traversal**
Today's assignment will be a continuation of the previous assignment. We will be adding a new method to the Binary Search Tree class called `breadthFirstTraversal()`. This method will take `tree` as an argument, and return an array of the values, ordered appropriately. We will start with our whiteboard process, then create a new method in our Binary Search Tree class, and finally write tests for our new method.

**Code Challenge 18 - FizzBuzz Tree**
Oh boy, it's FizzBuzz time! Today's assignment will be a continuation of the previous assignment. We will be adding a new method to the Binary Search Tree class called `fizzBuzzTree()`. This method will take `karyTree` as an argument, and return a new tree with the values modified as follows:

- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, simply turn the number into a String.

We will start with our whiteboard process, then create a new method in our Binary Search Tree class, and finally write tests for our new method.

## Colloborators

- Reece Renninger
- Reed Vogt
- Malik Torres
- Kaeden O'Meara
- Ike Steoger
- Eva Smith

## Whiteboard Process
<!-- Embedded whiteboard image -->
- **Code Challenge 15**

- ![Whiteboard](/public/codeChallenge15Whiteboard.png)

- **Code Challenge 16**

- ![Whiteboard](/public/codeChallenge16Whiteboard.png)

- **Code Challenge 17**

- ![Whiteboard](/public/codeChallenge17Whiteboard.png)

- **Code Challenge 18**

- ![Whiteboard](/public/codeChallenge18Whiteboard.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- **Code Challenge 15 - Trees**
I started by colloborating on a whiteboard with Reece Renninger. Our whiteboard is embedded above. I then created a Node class, a Tree class, a Binary Search Tree class, and a Binary Search Tree test file. Then I then created the required methods for the Binary Search Tree class. I'll have to plug my methods into Chat GPT to get the Big O space/time for this approach. The following methods will have a Big O space/time complexity:

- `preOrder()` - O(n)
- `inOrder()` - O(n)
- `postOrder()` - O(n)
- `add(value)` - O(h) O(log n)
- `contains(value)` - O(h) O(log n)

- **Code Challenge 16 - Find Maximum Value in a Binary Tree**
I started by collaborating on the whiteboard with Reed Vogt. After establishing our whiteboard, I created a new method in our Binary Search Tree class called `findMaximumValue()`. This method will take no arguments, and return the maximum value in the binary search tree. I will then write tests for our new method. The following methods will have a Big O space/time complexity:

- `findMaximumValue()` - O(n)

- **Code Challenge 17 - Breadth First Traversal**
I started by collaborating on the whiteboard with Malik Torres. After establishing our whiteboard, I created a new method in our Binary Search Tree class called `breadthFirstTraversal()`. This method will take `tree` as an argument, and return an array of the values, ordered appropriately. I will then write tests for our new method. The following methods will have a Big O space/time complexity:

- `breadthFirstTraversal(tree)` - O(n) on a balanced tree, O(n^2) on an unbalanced tree

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

- **Code Challenge 16 - Find Maximum Value in a Binary Tree**

1. Continued from the previous assignment, so I already have access to my `Node`, `Tree` and `BinarySearchTree` classes.

2. Working in my `index.js` file, I created a new method in our Binary Search Tree class called `findMaximumValue()`. This method will take no arguments, and return the maximum value in the binary search tree.

3. I then wrote tests for our new method in the `trees.test.js` file.

4. After running the tests in the terminal using the command `npm test`, all tests passed.

- ![Terminal](/public/codeChallenge16Tests.png)

- ![Nodes](https://media.giphy.com/media/12bkMjatTEfoWI/giphy.gif)

- **Code Challenge 17 - Breadth First Traversal**

1. Continued from the previous assignment, so I already have access to my `Node`, `Tree` and `BinarySearchTree` classes.

2. Working in my `index.js` file, I created a new method in our Binary Search Tree class called `breadthFirstTraversal()`. This method will take `tree` as an argument, and return an array of the values, ordered appropriately.

3. I then wrote tests for our new method in the `trees.test.js` file.

4. After running the tests in the terminal using the command `npm test`, all tests passed.

- ![Terminal](/public/codeChallenge17tests.png)

- ![Tree](https://media.giphy.com/media/VjrcYO72iu4lG/giphy.gif)
