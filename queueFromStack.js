// Build a queue with add and remove functionality from two stacks
const Stack = require('./implementStack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  add(el) {
    this.stack1.add(el)
  }
  // Remove() needs to pop items of stack 1 and add them to stack 2. 
  // When stack 1 is empty, pop the last item off stack 2 and store it.
  // Then put the items back in order by pushing them back into stack 1. 
  // Finally return the stored item. 
  remove() {
    while (!this.stack1.isEmpty()) {
      this.stack2.add(this.stack1.remove())
    }
    const result = this.stack2.remove();
    
    while (!this.stack2.isEmpty()) {
      this.stack1.add(this.stack2.remove())
    }
    return result
  }
}