# Linked List
<!-- Short summary of the challenge -->
**Code Challenge 05 - Linked List**
Today's assignment is to create a whiteboard that portrays my process of creating a linked list. I will create a node class that has properties for the value stored within the node, and a pointer to the next node. I will also create a linked list class that has a head property. Upon instantiation, an empty linked list should be created. After both classes have been written out, I'll need some tests to make sure everything is working properly. I will also add the following methods to my LinkedList class:

- `insert(value)`: Adds a new node with that value to the head of the list with an O(1) Time performance.
- `includes(value)`: Indicates whether that value exists as a Node’s value somewhere within the list.
- `toString()`: Returns: a string representing all the values in the Linked List, formatted as: `"{ a } -> { b } -> { c } -> NULL"`

**Code Challenge 06 - Insertions**
Today's assignment is to create a whiteboard that portrays my process of creating additional methods for my linked list. Since I already have the Node and LinkedList classes written, I will add the following methods to my LinkedList class:

- `append(value)`: Adds a new node with the given value to the end of the list.
- `insertBefore(value)`: Adds a new node with the given newValue immediately before the first value node.
- `insertAfter(value)`: Adds a new node with the given newValue immediately after the first value node.
- `delete(value)`: Deletes a node with the given value from the linked list.

**Code Challenge 07 - Kth Value**
Today's assignment is to create a whiteboard that portrays my process of creating a method for my linked list that returns the value of the node that is k from the end of the linked list. I will add the following method to my LinkedList class:

- `kthFromEnd(k)`: Returns the value of the node that is k from the end of the linked list.

**Code Challenge 08 - Zip Lists**
Today's assignment is to create a whiteboard that portrays my process of creating a method for my linked list that zips two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. I will add the following method to my LinkedList class:

- `zipLists(list1, list2)`: Returns a reference to the head of the zipped list.

## Whiteboard Process
<!-- Embedded whiteboard image -->
- ![Code Challenge 05  Linked List Whiteboard](/public/codeChallenge05Whiteboard.png)
- ![Code Challenge 06 Insertions Whiteboard](/public/codeChallenge06Whiteboard.png)
- ![Code Challenge 07 KTH Whiteboard](/public/CodeChallenge07Whiteboard.png)
- ![Code Challenge 08 zipList Whiteboard](/public/codeChallenge08Whiteboard.png)

## Approach and Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Code Challenge 05 - Linked List**
We went through this as a class and discussed the whiteboard process. We also went over Singly Linked Lists and how they work. I estimate that the Big O space/time for this approach will be O(n) because the time it takes to complete the function is directly proportional to the size of the input. It's difficult to estimate the space complexity because it's not clear how much memory will be used until I have the necessary code written.

Ok, so after running my tests, I see that I have 3 methods that I can apply the Big O space/time equation to:

1. `insert(value)`: The time complexity is constant. This method always inserts a new node at the head of the linked list, regardless of the size of the list. The space complexity is also constant. The method creates a new node, but it doesn't depend on the size of the linked list. So if I'm understanding this right, the Big O space/time for this method is O(1).

2. `includes(value)`: The time complexity is linear for this method. It iterates through each node in the linked list to check whether or not the value exists, and the number of iterations depends on the size of the list. The space complexity is constant. It uses a single variable to traverse the list, regardless of the size of the list. So the time complexity is O(n) and the space complexity is O(1).

3. `toString()`: Both the time complexity AND the space complexity are linear for this method. It iterates through each node in the linked list to create a string representation that contains all of the values in the list, and the number of iterations depends on the size of the list. Because this method constructs those string representations, the space used for the resulting string grows linearly with the size of the list. So the time complexity is O(n) and the space complexity is O(n).

**Code Challenge 06 - Insertions**
I estimate that the Big O space/time for this approach will be O(n) because the time it takes to complete the function is directly proportional to the size of the input. It's difficult to estimate the space complexity because it's not clear how much memory will be used until I have the necessary code written.

1. `append(value)`: Time Complexity - O(n) Space Complexity - O(1)

2. `insertBefore(value, newValue)`: Time Complexity - O(n) Space Complexity - O(1)

3. `insertAfter(value, newValue)`: Time Complexity - O(n) Space Complexity - O(1)

4. `delete(value)`: Time Complexity - O(n) Space Complexity - O(1)

**Code Challenge 07 - Kth Value**
I estimate that the Big O space/time for this approach will be O(n) because the time it takes to complete the function is directly proportional to the size of the input. It's difficult to estimate the space complexity because it's not clear how much memory will be used until I have the necessary code written.

1. `kthFromEnd(k)`: Space/Time Complexity - O(k + (n - k))

**Code Challenge 08 - Zip Lists**
I estimate that the Big O space/time for this approach will be O(n) because the time it takes to complete the function is directly proportional to the size of the input. It's difficult to estimate the space complexity because it's not clear how much memory will be used until I have the necessary code written.

1. `zipLists(list1, list2)`: Space/Time Complexity - O(n + m)

## Solution
<!-- Show how to run your code, and examples of it in action -->
1. To allow for testing, I created a `node.js` file and a `linked-list.test.js` file and ran the following commands in my terminal:
   - `npm init -y`
   - `npm i jest`
   - `npm test` - the test failed because I didn't have any tests written yet. But at least I know it's working.

2. I went in to my new package.json file and replaced the scripts object with the following line: `"test": "jest --verbose --coverage"`

3. I created my two classes, `Node` and `LinkedList` in the `node.js' file per instruction.

4. I created my tests in the `linked-list.test.js` file per instruction.

5. With my test written, I ran `npm test` in my terminal.

6. I thought about adding screenshots of my code here, but I have already spent like 3 hours doing this and I think it's more important to show the code in action. So I'm going to add a screenshot of my terminal after running `npm test` and a screenshot of my code coverage reports.

    - ![Terminal](/public/codeChallenge05tests.png)
    - ![Code Coverage](/public/codeChallenge06Tests.png)
    - ![Code Coverage](/public/codeChallengeTotalTests.png)
    - ![Code Coverage](/public/codechallengePassing.png)

7. Ok, so I'm failing my zipList tests. I'm going to go back and fix that eventually.

8. Thanks to Joshua Coffey, I am now passing zipList tests.

![Josh](https://media.giphy.com/media/3o7TKF1fSIs1R19B8k/giphy.gif)
