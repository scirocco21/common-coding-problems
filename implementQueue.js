class Queue {
  constructor() {
    this.data = [];
  }
  remove() {
    if (this.isEmpty()) {
      return "Underflow"
    }
    return this.data.shift();
  };
  peek() {
    return this.data[this.data.length - 1];
  }
  add(el) {
    this.data.push(el);
  }
  isEmpty() {
    return this.data.length === 0 ? true : false
  }
}

const queue = new Queue();