// Given a root node, print the width of each level of the tree

function levelWidth(root) {
  const arr = [this.root, null];
  const widths = [0];
  while (arr.length) {
    const el = arr.shift();
    if (el == null) { 
      if (arr.length) {
        widths.push(0);
        arr.push(null)
      } else {
        return widths;
      }
    } else {
      widths[widths.length -1 ] += 1
      arr.push(...el.children);
    }
  }
}