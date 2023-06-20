`use strict`;

// Code Challenge 26: Insertion Sort
// Tests not required for this code challenge

const { InsertionSort } = require(`../index.js`);

describe(`Insertion Sort`, () => {
  it(`Sorts an array`, () => {
    let sorted = [8,4,23,42,16,15];
    let reverseSorted = [20,18,12,8,5,-2];
    let fewUniques = [5,12,7,5,5,7];
    let nearlySorted = [2,3,5,7,13,11];

    console.log(InsertionSort(sorted));
    console.log(InsertionSort(reverseSorted));
    console.log(InsertionSort(fewUniques));
    console.log(InsertionSort(nearlySorted));

    expect(InsertionSort(sorted)).toEqual([4,8,15,16,23,42]);
    expect(InsertionSort(reverseSorted)).toEqual([-2,5,8,12,18,20]);
    expect(InsertionSort(fewUniques)).toEqual([5,5,5,7,7,12]);
    expect(InsertionSort(nearlySorted)).toEqual([2,3,5,7,11,13]);
  });
});



