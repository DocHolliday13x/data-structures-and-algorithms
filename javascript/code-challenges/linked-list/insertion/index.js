`use strict`;

//? Code Challenge 26: Insertion Sort

// Insertion Sort
// Inputs: [8,4,23,42,16,15]
// Output: [4,8,15,16,23,42]

// Pseudocode
// Insert(int[] sorted, int value)
//   initialize i to 0
//   WHILE value > sorted[i]
//     set i to i + 1
//   WHILE i < sorted.length
//     set temp to sorted[i]
//     set sorted[i] to value
//     set value to temp
//     set i to i + 1
//   append value to sorted

// InsertionSort(int[] input)
//   LET sorted = New Empty Array
//   sorted[0] = input[0]
//   FOR i from 1 up to input.length
//     Insert(sorted, input[i])
//   return sorted

// Sample Arrays
// Sorted - [8,4,23,42,16,15]
// Reverse Sorted - [20,18,12,8,5,-2]
// Few Uniques - [5,12,7,5,5,7]
// Nearly - Sorted [2,3,5,7,13,11]

//! Solution
Insert = (sorted, value) => {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
};

InsertionSort = (input) => {
  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    Insert(sorted, input[i]);
  }
  return sorted;
};


// Tests
// let sorted = [8,4,23,42,16,15];
// let reverseSorted = [20,18,12,8,5,-2];
// let fewUniques = [5,12,7,5,5,7];
// let nearlySorted = [2,3,5,7,13,11];

// console.log(InsertionSort(sorted));
// console.log(InsertionSort(reverseSorted));
// console.log(InsertionSort(fewUniques));
// console.log(InsertionSort(nearlySorted));

//? Refactored Solution
// InsertionSort = (input) => {
//   for (let i = 1; i < input.length; i++) {
//     let j = i;
//     while (j > 0 && input[j - 1] > input[j]) {
//       [input[j - 1], input[j]] = [input[j], input[j - 1]]; // Swap elements
//       j--;
//     }
//   }
//   return input;
// };

//? In this refactored function, we are using a while loop to swap elements in the array.
//? The while loop will run as long as j is greater than 0 and the element to the left of j is greater than j.
//? We are using array destructuring to swap the elements in the array.
//? This is a more efficient solution because we are not creating a new array and we are only iterating through the array once.










