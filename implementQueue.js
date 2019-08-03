class Queue {
  constructor() {
    this.data = [];
  }
  remove = () => {
    if (this.isEmpty()) {
      return "Underflow"
    }
    return this.data.shift();
  };
  add = (el) => {
    this.data.push(el);
  }
  isEmpty = () => {
    this.data.length === 0 ? true : false
  }
}

const queue = new Queue();