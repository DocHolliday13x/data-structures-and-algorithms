`use strict`;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    if (current.value === value) {
      node.next = this.head;
      this.head = node;
      return;
    }
    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(JSON.stringify(list, null, 2));

console.log('includes works: ', list.includes(3));

list.insertBefore(3, 10);
console.log(list.toString());


module.exports = LinkedList;






















