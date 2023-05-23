# Linked List KTH
<!-- Short summary of the challenge -->
Today's assignment is to create a whiteboard that portrays my process of creating a linked list and extending an implementation. I will create a node class that has properties for the value stored within the node, and a pointer to the next node. I will also create a linked list class that has a head property. Upon instantiation, an empty linked list should be created. I will then have to write a KTH method for the Linked List class. After both classes have been written out, I'll need some tests to make sure everything is working properly.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![Whiteboard](/public/codeChallenge05Whiteboard.png)

## Approach and Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Ok, so after running my tests, I see that I have 3 methods that I can apply the Big O space/time equation to:

1. `insert(value)`: The time complexity is constant. This method always inserts a new node at the head of the linked list, regardless of the size of the list. The space complexity is also constant. The method creates a new node, but it doesn't depend on the size of the linked list. So if I'm understanding this right, the Big O space/time for this method is O(1).

2. `includes(value)`: The time complexity is linear for this method. It iterates through each node in the linked list to check whether or not the value exists, and the number of iterations depends on the size of the list. The space complexity is constant. It uses a single variable to traverse the list, regardless of the size of the list. So the time complexity is O(n) and the space complexity is O(1).

3. `toString()`: Both the time complexity AND the space complexity are linear for this method. It iterates through each node in the linked list to create a string representation that contains all of the values in the list, and the number of iterations depends on the size of the list. Because this method constructs those string representations, the space used for the resulting string grows linearly with the size of the list. So the time complexity is O(n) and the space complexity is O(n).

## Solution
<!-- Show how to run your code, and examples of it in action -->
1. To allow for testing, I created a `node.js` file and a `linked-list.test.js` file and ran the following commands in my terminal:
   - `npm init -y`
   - `npm i jest`
   - `npm test` - the test failed because I didn't have any tests written yet. But at least I know it's working.

2. I went in to my new package.json file and replaced the scripts object with the following line: `"test": "jest --verbose --coverage"`

3. I created my two classes, `Node` and `LinkedList` in the `node.js' file per instruction.

4. I created my tests in the `linked-list.test.js` file per instruction.

5. With my test written, I ran `npm test` in my terminal and saw that 1 test suite passed with 7 total passing tests. I also saw that the coverage was 100% for statements, branches, functions, and lines. I'm still not sure what that means, but it sounds good and green is a super nice color to see.

6. I'm going to add a screenshot of my terminal after running `npm test` and a screenshot of my code coverage report.

   - ![Terminal](/public/codeChallenge05tests.png)
