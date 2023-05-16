# Reverse an Array
<!-- Short summary of the challenge -->

Today's assignment is to create a whiteboard that portrays my process of creating a function that takes in an array and returns the array in reverse order. I will be writing out code as part of my whiteboard process, but I will not be creating any external program files for this assignment.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![Whiteboard](javascript/code-challenges/array-reverse/assets/codeChallenge1Whiteboard.png)

## Approach and Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
We went through this as a class and discussed the whiteboard process. We somewhat covered what the Big O space/time would be, but I am not sure I fully understand it yet. I will be doing more research on this topic, but as far as I can tell it is simply a mathematical equation that is used to determine the efficiency of an algorithm. I am not sure how to calculate it yet or what the space/time efficiency of my solution is.

I did find this resource on Big O, which I will be reading through to try and understand it better: [Understanding Big O Notation for Data Scientists](https://towardsdatascience.com/understanding-big-o-notation-for-data-scientists-b892bc00e1e8)

## Solution
<!-- Show how to run your code, and examples of it in action -->

Below I have listed my function as displayed on my whiteboard.

let reverseArray(arr){
  let front = 0;
  let end = arr.length - 1;

  while(end > front){
    let temp = arr[front];
    arr[front] = arr[end];
    arr[end] = temp;
    front++;
    end--;
  }
  return arr;
}
