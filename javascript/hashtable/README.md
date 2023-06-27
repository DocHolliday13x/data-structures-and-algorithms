# Hash Table Implementation
<!-- Short summary or background information -->

**Code Challenge 30 - Hash Table Implementation**
Today's assignment will not include a whiteboard for the code challenge. This code challenge is to implement a hash table data structure. We will be implementing the following methods on our hash table:

- `set(key, value)` - This method should hash the key, and add the key and value pair to the table, handling collisions as needed. Should a given key already exist in the table, the value should be updated with the value argument passed to the method.

- `get(key)` - This method should accept a key, and return the value from the table.

- `contains(key)` - This method should accept a key, and return a boolean indicating whether the key exists in the table already.

- `keys()` - This method should return an array of all the keys in the table.

- `hash(key)` - This method should hash the provided key and return a number. Should be deterministic (same key yields same number).

**Code Challenge 31 - Repeated Word**
Today's assignment will not include a whiteboard for the code challenge. This code challenge is to implement a method that accepts a lengthy string parameter, and returns the first word to occur more than once in that provided string. We will be using a hash table to solve this problem. We will be implementing the following methods on our hash table:

- `RepeatedWord(string)` - This method should accept a string as a parameter, and return the first word to occur more than once in that provided string. Should return a string.

## Colloborators

- Ryan Gallaway
- Reece Reeninger
- Ike Steoger
- Kenya Womack
- Coriana Williams

## Whiteboard Process
<!-- Embedded whiteboard image -->
- **Code Challenge 30**

There was no whiteboard requirement for today's code challenge.

- **Code Challenge 31**

There was no whiteboard requirement for today's code challenge.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- **Code Challenge 30**
We didn't need to whiteboard for today's code challenge, and the majority of this challenge we completed as a class. What we didn't get to during class was writing tests for our hash table implementation. I wrote tests for each of the methods we implemented in our hash table class. I also wrote tests for the `hash(key)` method, which is a private method in our hash table class. I wrote tests for this method because it is a private method, and I wanted to make sure that it was working as expected. I also wrote tests for the `hash(key)` method because it is a deterministic method, and I wanted to make sure that it was returning the same number for the same key every time. I wrote tests for each of the methods in our hash table class, and all tests are passing. The Big O for this implementation is O(1) for all methods except for the `hash(key)` method, which is O(n).

- **Code Challenge 31**
We continued working from the previous challenge, Hashtables. Like yesterday, there is no whiteboard requirement for today's code challenge. We were tasked with writing a method that accepts a lengthy string parameter, and returns the first word to occur more than once in that provided string. We were to use a hash table to solve this problem. I wrote a method called `repeatedWord(string)` that accepts a string as a parameter, and returns the first word to occur more than once in that provided string. I wrote tests for this method, and all tests are passing. The Big O for this implementation is O(n) for time, and O(n) for space.

## Solution
<!-- Show how to run your code, and examples of it in action -->

- **Code Challenge 30**
  - To run this code, you will need to clone down the repo from github. Once you have cloned the repo, you will need to run `npm i` in your terminal to install the dependencies. Once the dependencies are installed, you can run `npm test` in your terminal to run the tests. All tests should pass.

  - ![Tests](/public/codeChallenge30Tests.png)
  - ![Tests](/public/codeChallenge30Test.png)

- **Code Challenge 31**
  - To run this code, you will need to clone down the repo from github. Once you have cloned the repo, you will need to run `npm i` in your terminal to install the dependencies. Once the dependencies are installed, you can run `npm test` in your terminal to run the tests. All tests should pass.

  - ![Tests](/public/codeChallenge31Tests.png)
  - ![Tests](/public/codeChallenge31Test.png)

- ![hashGIF](https://media.giphy.com/media/26AHxNt3bpqw9Yexq/giphy.gif)
