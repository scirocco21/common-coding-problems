const postorderTraverse = (node, array) => {
  if (!node) return array;
  postorderTraverse(node.left, array);
  postorderTraverse(node.right,array);
  array.push(node.value);
  return array;
}