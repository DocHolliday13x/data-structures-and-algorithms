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
const insert = (sorted, value) => {
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

const insertionSort = (input) => {
  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
};

insertionSort([8,4,23,42,16,15]);


//! Refactored Solution
// const insertionSort = (input) => {
//   for (let i = 1; i < input.length; i++) {
//     let j = i;
//     while (j > 0 && input[j - 1] > input[j]) {
//       [input[j - 1], input[j]] = [input[j], input[j - 1]]; // Swap elements
//       j--;
//     }
//   }
//   return input;
// };

// In this refactored function, we are using a while loop to swap elements in the array.
// The while loop will run as long as j is greater than 0 and the element to the left of j is greater than j.
// We are using array destructuring to swap the elements in the array.
// This is a more efficient solution because we are not creating a new array and we are only iterating through the array once.

//? Code Challenge 27: Merge Sort

// Merge Sort
// Inputs: [8,4,23,42,16,15]
// Output: [4,8,15,16,23,42]

// Pseudocode
// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length

//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0

//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1

//         k <-- k + 1

//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left

// Sample Arrays
// Sorted - [8,4,23,42,16,15]
// Reverse Sorted - [20,18,12,8,5,-2]
// Few Uniques - [5,12,7,5,5,7]
// Nearly - Sorted [2,3,5,7,13,11]

//! Solution
const mergeSort = (arr) => {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }
};

mergeSort([8,4,23,42,16,15]);

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);

//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   left = mergeSort(left);
//   right = mergeSort(right);
//   return merge(left, right, arr);
// }

// function merge(left, right, arr) {
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while (i < left.length && j < right.length) {

//     if (left[i] <= right[j]) {
//       arr[k] = left[i];
//       i++;
//       k++;
//     } else {
//       arr[k] = right[j];
//       j++;
//       k++;
//     }
//   }

//   while (i < left.length) {
//     arr[k] = left[i];
//     i++;
//     k++;
//   }

//   while (j < right.length) {
//     arr[k] = right[j];
//     j++;
//     k++;
//   }
//   return arr;
// }

// mergeSort([8,4,23,42,16,15]);


module.exports = {
  insertionSort,
  insert,
  mergeSort,
  merge
};



