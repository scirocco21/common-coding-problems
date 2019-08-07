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
    return this.insertAt(data,0)
  }
  size() {
    let size = 0;
    let node = this.head
    while(node) {
      size++;
      node = node.next;
    }
    return size;
  }
  getFirst() {
    return this.getAt(0);
  }
  getLast() {   
    return this.getAt(this.size() - 1)
  }
  clearList() {
    this.head = null;
  }
  removeFirst() {
    return this.removeAt(0);
  }
  removeLast() {
    return this.removeAt(this.size() - 1);
  }
  insertLast(data) {
    return this.insertAt(data, this.size() - 1);
  }
  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      // once counter increments to index, return node
      if (counter === index) {
        return node
      }
      node = node.next;
      counter++;
    }
    // if while loop exits or gets skipped, return null
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    // check that index does not exceed list length
    if (index < this.size()) {
      // get previous node
      let previous = this.getAt(index - 1);
      // skip target node;
      previous.next = previous.next.next;
    } else {
      return null;
    }
  }
  insertAt(data,index) {
    let addedNode = new Node(data);
    if (!this.head) {
      this.head = addedNode;
      return;
    }
    if (index === 0) {
      let previous = this.getFirst();
      this.head = addedNode;
      addedNode.next = previous;
      return;
    }
    if (index >= this.size() - 1) {
      this.getLast().next = addedNode;
    } else {
      let previous = this.getAt(index - 1);
      let current = previous.next;
      previous.next = addedNode;
      addedNode.next = current;
    }
  }
  forEach(callback) {
    let node = this.head;
    while (node) {
      node.data = callback(node.data);
      node = node.next;
    }
    return this;
  }
}