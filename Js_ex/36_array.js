/** Collection 클래스를 상속받아 
 * List 메소드들과 클래스 메소드 arrayToList, listToArray를 
 * 보유한 ArrayList 클래스를 구현하시오. (assert로 Test코드도 작성)
 */

ArrayList.listToArray({ value: 1, rest: { value: 2 } }) => [1,2]
ArrayList.arrayToList([1,2]) => { value: 1, rest: { value: 2 } }

const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
alist.add(3);     // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.add(5, 1);  // { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3 } }}
alist.remove(2);  // { value: 1, rest: { value: 3 } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300);  // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.get(2);  alist.size;  // 22, 4
alist.indexOf(300);  // 1
alist.contains(300); alist.contains(301);  // true, false
alist.isEmpty; alist.peek;  // false, 3
alist.toArray();  // [1, 300, 22, 3]
alist.iterator().next();  // { value: 1, done: false }
alist.clear();  // all clear


const assert = require('assert');

class Collection {
  constructor() {
    this.size = 0;
  }

  get isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  peek() {
    if (!this.head) return undefined;
    let curr = this.head;
    while (curr.rest) curr = curr.rest;
    return curr.value;
  }

  toArray() {
    return ArrayList.listToArray(this.head);
  }

  toString() {
    return JSON.stringify(this.head);
  }

  print() {
    console.log(`ArrayList(${this.size}) ${this.toString()}`);
  }

  iterator() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.rest;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
}

class ArrayList extends Collection {
  constructor(array = []) {
    super();
    this.head = ArrayList.arrayToList(array);
    this.size = array.length;
  }

  static arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
    return list;
  }

  static listToArray(list) {
    const result = [];
    while (list) {
      result.push(list.value);
      list = list.rest;
    }
    return result;
  }

  add(value, index = this.size) {
    if (index < 0 || index > this.size) throw new RangeError('Index out of bounds');
    const newNode = { value, rest: null };

    if (index === 0) {
      newNode.rest = this.head;
      this.head = newNode;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.rest;
      }
      newNode.rest = prev.rest;
      prev.rest = newNode;
    }

    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.size) throw new RangeError('Index out of bounds');

    if (index === 0) {
      this.head = this.head.rest;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.rest;
      }
      prev.rest = prev.rest?.rest || null;
    }

    this.size--;
  }

  get(index) {
    if (index < 0 || index >= this.size) throw new RangeError('Index out of bounds');
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.rest;
    }
    return curr.value;
  }

  set(index, value) {
    if (index < 0 || index >= this.size) throw new RangeError('Index out of bounds');
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.rest;
    }
    curr.value = value;
  }

  indexOf(value) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) return index;
      curr = curr.rest;
      index++;
    }
    return -1;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }
}