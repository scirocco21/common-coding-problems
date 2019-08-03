const clonedeep = require('lodash.clonedeep')

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insertFirst(data) {
    // set next property of new head node to previous head node
    this.head = new Node(data, this.head);
  }
  size() {
    let size = 0;
    // don't overwrite head property of original list!
    let linkedList = clonedeep(this)
    while(linkedList.head) {
      size++;
      linkedList.head = linkedList.head.next;
    }
    return size;
  }
}