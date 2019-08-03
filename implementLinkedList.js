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
    let previousNode;
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
}