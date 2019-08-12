const preorderTraverse = (node,array) => {
  if (!node) return array;
  // process node by storing its value in array
  array.push(node.value);
  preorderTraverse(node.left, array);
  preorderTraverse(node.left, array);
  return array;
}