const inorderTraverse = (node, array) => {
  if (!node) return array;
  inorderTraverse(node.left, array);
  array.push(node.value);
  inorderTraverse(node.right, array);
  return array;
}