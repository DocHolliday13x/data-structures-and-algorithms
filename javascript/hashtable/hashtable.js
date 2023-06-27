`use strict`;

const LinkedList = require('./LinkedList/index.js');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    // hash the key
    let characters = key.split('');
    let sum = characters.reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    console.log('sum: ', sum);
    return (sum * 599) % this.size;
  }

  set(key, value) {
    // set the key/value pair in the buckets array
    let position = this.hash(key);
    if (!this.buckets[position]) {
      this.buckets[position] = new LinkedList();
    }
    let dataEntry = { [key]: value };
    this.buckets[position].append(dataEntry);
  }

  get(key) {
    // get the value from the key
    let position = this.hash(key);
    if (!this.buckets[position]) {
      return null;
    }
    let current = this.buckets[position].head;
    while (current) {
      if (current.value[key]) {
        return current.value[key];
      }
      current = current.next;
    }
    return null;
  }

  contains(key) {
    // return a boolean if the key exists in the buckets array
    let position = this.hash(key);
    if (!this.buckets[position]) {
      return false;
    }
    let current = this.buckets[position].head;
    while (current) {
      if (current.value[key]) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  keys() {
    // return an array of all the keys in the buckets array
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let current = this.buckets[i].head;
        while (current) {
          keys.push(Object.keys(current.value)[0]);
          current = current.next;
        }
      }
    }
    return keys;
  }

  //? Code Challenge 31: Repeated Word
  repeatedWord(string) {
    let words = string.split(' ');
    let hash = new HashTable(words.length);
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();

      // increase the count of current word
      if (Object.prototype.hasOwnProperty.call(wordCount, word)) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }

      if (hash.contains(word)) {
        return word;
      }
      hash.set(word, word);
    }

    // find most frequent words
    let max = 0;
    let freqWords = [];

    for(let word in wordCount){
      if (Object.prototype.hasOwnProperty.call(wordCount, word)){
        if (wordCount[word] > max){
          max = wordCount[word];
          freqWords = [word];
        } else if (wordCount[word] === max){
          freqWords.push(word);
        }
      }
    }
    return {
      repeatedWord: null,
      wordCount: wordCount,
      freqWords: freqWords
    };
  }
}


const table = new HashTable(1024);

console.log(table.hash('test'));

let hashOne = table.hash('Nomad');
let hashTwo = table.hash('Broots Waymb');
console.log('hashOne: ', hashOne);
console.log('hashTwo: ', hashTwo);

table.set('Nomad', 'has gun, will travel');
table.set('Broots Waymb', 'hates guns, because parent murder');

console.log('updated table: ', table);
console.log('GET works!', table.get('Nomad'));
console.log('CONTAINS works!', table.contains('Nomad')); // expect TRUE
console.log('CONTAINS works!', table.get('Bruce Wayne')); // expect FALSE

let keys = table.keys();
console.log('keys: ', keys);


module.exports = HashTable;
