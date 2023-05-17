# Binary Search
<!-- Short summary of the challenge -->

Today's assignment is to create a whiteboard that portrays our process of creating a function that takes in two parameters - a sorted array and a search key. Without using any of the built in methods available to JavaScript, return the index of the arry's element that is equal to the value of the search key, or -1 if the element is not in the array. I will be writing out code as part of my whiteboard process, but I will not be creating any external program files for this assignment.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![Whiteboard](/public/codeChallenge03Whiteboard.png)

## Approach and Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Ike and I followed the Wikipedia example and utilized a similar strategy of finding the middle index value, then comparing it to the search key. We then moved either left or right depending on whether the search key was greater than or less than the middle index value. We continued this process until we found the search key or determined that it was not in the array.

## Solution
<!-- Show how to run your code, and examples of it in action -->
