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
}