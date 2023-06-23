'use strict';

const { Movies } = require('./movies');
const { sortTitle, sortYear, compareYear, compareTitle } = require('./sort');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });

  // I have to write the tests for my comparison functions that compare by year and by title
  it('can sort movies compared by year', () => {
    const yearA = { year: 1984 };
    const yearB = { year: 1988 };

    expect(compareYear(yearA, yearB)).toEqual(4);

  });

  it('can sort movies compared by title', () => {
    const titleA = { title: 'Beetlejuice' };
    const titleB = { title: 'The Cotton Club' };

    expect(compareTitle(titleA, titleB)).toBeLessThan(0);
  });
});
