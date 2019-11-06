class Node {
  constructor(val=null, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let head = new Node(5, new Node(1, new Node(3, new Node(6), new Node(7)), new Node(8)), new Node(4, new Node(9), new Node(2)))

// lca(head,8,7) should return 1
// lca(head,1,5) should return 5
// lca(head,2,2) should return 2 (lca can be one of the input nodes itself)
// lca(head, 2,0) should return null (0 is not in tree)

//            sketch:
//            5
//          /   \
//         1     4
//        / \   / \
//       3   8 9   2
//      / \ 
//     6   7



function lca(root, val1, val2) {
  let pathToOne = path(root, val1);
  let pathToTwo = path(root, val2);
  console.log(pathToOne,pathToTwo)
  // if either value is not in the tree, return null
  if (!pathToOne || !pathToTwo) {
    return null
  }
  let result = null;
  // pop values of the stack until they are different - whatever 
  // is assigned to result at that point is the lca
  while (pathToOne.length !== 0 && pathToTwo.length !== 0) {
    let i = pathToOne.pop();
    let j = pathToTwo.pop();
    if (i === j) {
      result = i;
    } else {
      break;
    }
  }
  return result
}

//helper method
function path(root, val) {
  // base case: x is not in the (sub)tree
  if (root === null) return null;
  // base case: x is in the (sub)tree
  if (root.val === val) return [root.val]
  
  let leftPath = path(root.left, val);
  let rightPath = path(root.right,val);
  // is x in left subtree? 
  if (leftPath !== null) {
    leftPath.push(root.val)
    return leftPath
  }
  // is x in right subtree?
  if (rightPath !== null) {
    rightPath.push(root.val)
    return rightPath
  }
  return null
}

// path(head, 8) => return [8,1,5]