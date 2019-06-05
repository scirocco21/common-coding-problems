// general Node constructor that is agnostic about the number of its children
// A Node (a) carries some value and (b) contains references to its children

class Node {
  constructor(data) {
    this.data = data;
    this.children = []
  }
  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }
  remove(data) {
    this.children.filter(node => {
      return node.data !== data;
    });
  }
}

// add tree constructor function. By default, a tree has root set to null. A new tree instance can then have its root property set to a particular node.
class Tree {
  constructor() {
    this.root = null;
  }
  // function to only traverse tree; extra functionality like printing or searching provided by parameter function `func`
  breadthFirst(func) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      func(node);
    }
  }
}