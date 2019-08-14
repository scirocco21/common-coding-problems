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
      nodes.push(...node.children)
    }
    return this;
  }
  traverseDF(fn) {
    let nodes = [];
    if (this.root) {
      nodes.push(this.root);
    }
    while(nodes.length > 0) {
      let node = nodes.shift();
      fn(node);
      nodes.unshift(...node.children)
    }
    return this;
  }
}