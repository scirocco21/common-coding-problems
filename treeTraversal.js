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