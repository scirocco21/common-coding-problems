class Stack {
  constructor() {
    this.data = [];
  }
  remove() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.data.pop()
  };
  add(el) {
    this.data.push(el);
  }
  isEmpty() {
    return this.data.length === 0 ? true : false
  }
}

const stack = new Stack();