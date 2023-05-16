# Insert Shift Array
<!-- Short summary of the challenge -->

Today's assignment is to create a whiteboard that portrays my process of creating a function that takes in an array and an integer value and returns the array with the integer value inserted at the middle index. We will be writing out code as part of our whiteboard process, but will not be creating any external program files for this assignment other than the replit for testing our solution.

## Collaborators

- Nick Mullaney

## Whiteboard Process
<!-- Embedded whiteboard image -->

![Whiteboard](javascript/code-challenges/array-reverse/assets/codeChallenge02Whiteboard.png)

## Approach and Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I was partnered with Nick Mullaney for this assignment. We discussed the problem and came up with a solution together. We decided to create a for loop to iterate through our array and use math.ceil() and array.length to locate the middle index. As the loop does this, it shifts elements within our array to the right starting from the middle index. The integer value is then plugged into the middle index and the returned array yeilds the desired outcome.

The Big O space/time for this approach is O(n) because we are iterating through the array once. The splice method is also O(n) because it is iterating through the array to insert the value at the middle index. This means that the overall Big O space/time is O(n) + O(n) = O(2n) = O(n).

## Solution
<!-- Show how to run your code, and examples of it in action -->

![isaTests](javascript/code-challenges/array-reverse/assets/insert-shift-array-tests.png)
