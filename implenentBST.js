class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    let node = new Node(data);
    if (data < this.data && this.left) {
      this.left.insert(data)
    } else if (data < this.data) {
      this.left = node;
    } else if (data > this.data && this.right) {
      this.right.insert(data)
    } else if (data > this.data) {
      this.right = node;
    }
  }
  contains(data) {
    if (data === this.data) {
      return true;
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data)
    }
    return false;
  }
  validate(min = null, max = null) {
    // ==========
    // add logic for left hand side of BST
    // ==========
    // 1. If there is a max value set and the current node's value exceeds it, return false
    if (max !== null && this.data > max) {
      return false;
    }
    // 2. If there is a left node and it does not pass validation when we set max value to its data value, return false
    if (this.left && !this.left.validate(min,this.data)) {
      return false;
    }
    // ============
    // add logic for right hand side of BST
    // ============
    // 1. 1. If there is a min value set and the current node's value falls short of it, return false
    if (min !== null && this.data < min) {
      return false;
    }
    // 2. If there is a right node and it does not pass validation when we set min value to its data value, return false
    if (this.right && !this.right.validate(this.data,max)) {
      return false;
    }
    return true
  }
}
