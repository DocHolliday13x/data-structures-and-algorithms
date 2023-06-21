`use strict`;

//? Code Challenge 26: Insertion Sort Tests
// Tests not required for this code challenge

// const { insertionSort } = require(`../index.js`);

// describe(`Insertion Sort`, () => {
//   it(`Sorts an array`, () => {
//     let sorted = [8,4,23,42,16,15];
//     let reverseSorted = [20,18,12,8,5,-2];
//     let fewUniques = [5,12,7,5,5,7];
//     let nearlySorted = [2,3,5,7,13,11];

//     console.log(insertionSort(sorted));
//     console.log(insertionSort(reverseSorted));
//     console.log(insertionSort(fewUniques));
//     console.log(insertionSort(nearlySorted));

//     expect(insertionSort(sorted)).toEqual([4,8,15,16,23,42]);
//     expect(insertionSort(reverseSorted)).toEqual([-2,5,8,12,18,20]);
//     expect(insertionSort(fewUniques)).toEqual([5,5,5,7,7,12]);
//     expect(insertionSort(nearlySorted)).toEqual([2,3,5,7,11,13]);
//   });

// });

const { insertionSort, insert } = require('../index.js');

describe('insertionSort', () => {
  test('should sort an array of numbers in ascending order', () => {
    const input = [8, 4, 23, 42, 16, 15];
    const sortedArr = insertionSort(input);
    expect(sortedArr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('should sort an array with duplicate numbers', () => {
    const input = [5, 2, 1, 3, 4, 2];
    const sortedArr = insertionSort(input);
    expect(sortedArr).toEqual([1, 2, 2, 3, 4, 5]);
  });

  test('should return an empty array when an empty array is provided', () => {
    const input = [];
    const sortedArr = insertionSort(input);
    expect(sortedArr).toEqual([]);
  });

  test('should return the same array when an array with a single element is provided', () => {
    const input = [42];
    const sortedArr = insertionSort(input);
    expect(sortedArr).toEqual([42]);
  });
});

describe('insert', () => {
  test('should insert a value at the correct position in a sorted array', () => {
    const sorted = [1, 3, 5, 7];
    const value = 4;
    insert(sorted, value);
    expect(sorted).toEqual([1, 3, 4, 5, 7]);
  });

  test('should handle inserting a value at the beginning of the array', () => {
    const sorted = [2, 4, 6, 8];
    const value = 1;
    insert(sorted, value);
    expect(sorted).toEqual([1, 2, 4, 6, 8]);
  });

  test('should handle inserting a value at the end of the array', () => {
    const sorted = [1, 2, 3, 4];
    const value = 5;
    insert(sorted, value);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle inserting a value into an empty array', () => {
    const sorted = [];
    const value = 42;
    insert(sorted, value);
    expect(sorted).toEqual([42]);
  });
});


//? Code Challenge 27: Merge Sort Tests

// const mergeSort  = require(`../index.js`);

// describe(`Merge Sort`, () => {
//   it(`Sorts an array`, () => {
//     let sorted = [8,4,23,42,16,15];
//     let reverseSorted = [20,18,12,8,5,-2];
//     let fewUniques = [5,12,7,5,5,7];
//     let nearlySorted = [2,3,5,7,13,11];

//     console.log(mergeSort(sorted));
//     console.log(mergeSort(reverseSorted));
//     console.log(mergeSort(fewUniques));
//     console.log(mergeSort(nearlySorted));

//     expect(mergeSort(sorted)).toEqual([4,8,15,16,23,42]);
//     expect(mergeSort(reverseSorted)).toEqual([-2,5,8,12,18,20]);
//     expect(mergeSort(fewUniques)).toEqual([5,5,5,7,7,12]);
//     expect(mergeSort(nearlySorted)).toEqual([2,3,5,7,11,13]);
//   });

// });

const { mergeSort, merge } = require('../index.js');

describe('mergeSort', () => {
  test('should sort an array of numbers in ascending order', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('should sort an array with duplicate numbers', () => {
    const arr = [5, 2, 1, 3, 4, 2];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 2, 3, 4, 5]);
  });

  test('should return an empty array when an empty array is provided', () => {
    const arr = [];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([]);
  });

  test('should return the same array when an array with a single element is provided', () => {
    const arr = [42];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([42]);
  });
});

describe('merge', () => {
  test('should merge two sorted arrays into a single sorted array', () => {
    const left = [2, 5, 8];
    const right = [1, 3, 6];
    const arr = [0, 0, 0, 0, 0, 0];
    merge(left, right, arr);
    expect(arr).toEqual([1, 2, 3, 5, 6, 8]);
  });

  test('should handle arrays with different lengths', () => {
    const left = [2, 5, 8, 10];
    const right = [1, 3, 6];
    const arr = [0, 0, 0, 0, 0, 0, 0, 0];
    merge(left, right, arr);
    expect(arr).toEqual([1, 2, 3, 5, 6, 8, 10, 0]);
  });
});


