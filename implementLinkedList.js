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
    let node = this.head
    while(node) {
      size++;
      node = node.next;
    }
    return size;
  }
  getFirst() {
    return this.head
  }
  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
  }
  clearList() {
    this.head = null;
  }
  removeFirst() {
    // if the list is empty (list.head points at null) return
    if (!this.head) {
      return 
    } 
    // otherwise set the head pointer to head.next
    // if the list has only node, head will point to null
    // otherwise it will skip the first node and point to the second
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.head = null;
    }
    let node = this.head;
    let previous;
    while (node) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let last = this.getLast();
    last.next = node;
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
    if (index >= this.size()) {
      this.insertLast(data);
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