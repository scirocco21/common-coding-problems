class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data))
  }
  remove(data) {
    this.children = this.children.filter(child => child.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    let nodes = [];
    if (this.root) {
      nodes.push(this.root);
    }
    while(nodes.length > 0) {
      let node = nodes.shift();
      fn(node);
      for (let child of node.children) {
        nodes.push(child);
      }
    }
    return this;
  }
}