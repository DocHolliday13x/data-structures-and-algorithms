`use strict`;

// const LinkedList = require('../LinkedList/index.js');
const HashTable = require('../hashtable.js');

describe('Hash Table', () => {
  it('can add a key/value to your hashtable resulting in the value being in the data structure', () => {
    const hashTable = new HashTable(1024);
    hashTable.set('name', 'john');
    expect(hashTable.contains('name')).toBe(true);
  });

  it('can retrieve based on a key returns the value stored', () => {
    const hashTable = new HashTable(1024);
    hashTable.set('name', 'john');
    expect(hashTable.get('name')).toBe('john');
  });

  it('can successfully returns null for a key that does not exist in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.set('name', 'john');
    expect(hashTable.get('age')).toBe(null);
  });

  it('can successfully handle a collision within the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.set('name', 'john');
    hashTable.set('mean', 'john');
    expect(hashTable.contains('name')).toBe(true);
    expect(hashTable.contains('mean')).toBe(true);
  });

  it('can successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashTable = new HashTable(1024);
    hashTable.set('name', 'john');
    hashTable.set('mean', 'john');
    expect(hashTable.get('name')).toBe('john');
    expect(hashTable.get('mean')).toBe('john');
  });

  it('can successfully hash a key to an in-range value', () => {
    const hashTable = new HashTable(1024);
    expect(hashTable.hash('name')).toBeLessThanOrEqual(1024);
  });
});



















