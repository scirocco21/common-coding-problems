// Given a root node, print the width of each level of the tree

function levelWidth(root) {
  const arr = [root, null];
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

// test case:
// 
// levelWidth({data: 7, children: [
//   {data: 2, children: [   
//     {data: 3, children: []}
//   ]},
//   {data: 10, children: [
//     {data: 4, children: []}
//   ]}
// ]})

// return: [ 1, 2, 2 ]