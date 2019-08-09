// Given a root node, print the width of each level of the tree

// 1. The value of "null" acts as stopper value to separate different levels of the tree
// 2. When "null" is encountered, add a new counter to the counters array and add null back to the end of the nodes array

function levelWidth(root) {
  const arr = [root, null];
  const widthCounters = [0];

  // iterate as long as array has elements
  while (arr.length) {
    const el = arr.shift();
    // if you see the stop character, check if there is anything left in array
    if (el == null) { 
      if (arr.length) {
        widthCounters.push(0);
        arr.push(null)
      } else {
        return widthCounters;
      }
    // otherwise keep incrementing the counter for the relevant level and add child nodes
    } else {
      widthCounters[widthCounters.length -1 ] += 1
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