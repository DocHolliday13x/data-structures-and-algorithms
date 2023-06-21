`use strict`;

//? Code Challenge 26: Insertion Sort Tests
// Tests not required for this code challenge

const insertionSort = require(`../index.js`);

describe(`Insertion Sort`, () => {
  it(`Sorts an array`, () => {
    let sorted = [8,4,23,42,16,15];
    let reverseSorted = [20,18,12,8,5,-2];
    let fewUniques = [5,12,7,5,5,7];
    let nearlySorted = [2,3,5,7,13,11];

    console.log(insertionSort(sorted));
    console.log(insertionSort(reverseSorted));
    console.log(insertionSort(fewUniques));
    console.log(insertionSort(nearlySorted));

    expect(insertionSort(sorted)).toEqual([4,8,15,16,23,42]);
    expect(insertionSort(reverseSorted)).toEqual([-2,5,8,12,18,20]);
    expect(insertionSort(fewUniques)).toEqual([5,5,5,7,7,12]);
    expect(insertionSort(nearlySorted)).toEqual([2,3,5,7,11,13]);
  });

});

//? Code Challenge 27: Merge Sort Tests

const mergeSort  = require(`../index.js`);

describe(`Merge Sort`, () => {
  it(`Sorts an array`, () => {
    let sorted = [8,4,23,42,16,15];
    let reverseSorted = [20,18,12,8,5,-2];
    let fewUniques = [5,12,7,5,5,7];
    let nearlySorted = [2,3,5,7,13,11];

    console.log(mergeSort(sorted));
    console.log(mergeSort(reverseSorted));
    console.log(mergeSort(fewUniques));
    console.log(mergeSort(nearlySorted));

    expect(mergeSort(sorted)).toEqual([4,8,15,16,23,42]);
    expect(mergeSort(reverseSorted)).toEqual([-2,5,8,12,18,20]);
    expect(mergeSort(fewUniques)).toEqual([5,5,5,7,7,12]);
    expect(mergeSort(nearlySorted)).toEqual([2,3,5,7,11,13]);
  });

});

