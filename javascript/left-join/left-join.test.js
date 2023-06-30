`use strict`;

const leftJoin = require(`./index.js`);

describe(`leftJoin`, () => {

  let hashMapLeft = new Map();
  let hashMapRight = new Map();

  hashMapLeft.set(`fond`, `enamored`);
  hashMapLeft.set(`wrath`, `anger`);
  hashMapLeft.set(`diligent`, `employed`);
  hashMapLeft.set(`outfit`, `garb`);
  hashMapLeft.set(`guide`, `usher`);

  hashMapRight.set(`fond`, `averse`);
  hashMapRight.set(`wrath`, `delight`);
  hashMapRight.set(`diligent`, `idle`);
  hashMapRight.set(`guide`, `follow`);
  hashMapRight.set(`flow`, `jam`);

  it(`should return a left join of two hashmaps`, () => {
    expect(leftJoin(hashMapLeft, hashMapRight)).toEqual([
      [`fond`, `enamored`, `averse`],
      [`wrath`, `anger`, `delight`],
      [`diligent`, `employed`, `idle`],
      [`outfit`, `garb`, null],
      [`guide`, `usher`, `follow`],
    ]);
  });

  it(`should return an empty array if the left hashmap is empty`, () => {
    expect(leftJoin(new Map(), hashMapRight)).toEqual([]);
  });

  it(`should return an empty array if the right hashmap is empty`, () => {
    expect(leftJoin(hashMapLeft, new Map())).toEqual([
      [`fond`, `enamored`, null],
      [`wrath`, `anger`, null],
      [`diligent`, `employed`, null],
      [`outfit`, `garb`, null],
      [`guide`, `usher`, null],
    ]);
  });

  it(`should return an empty array if both hashmaps are empty`, () => {
    expect(leftJoin(new Map(), new Map())).toEqual([]);
  });

});








