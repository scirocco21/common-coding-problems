// check out: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

function mergeSort(nums) {
  // array of length 1 is automatically sorted
  if (nums.length < 2) {
    return nums;
  }
  // define middle and end points
  const length = nums.length;
  const middle = Math.floor(length / 2);
  // slice array into two equal or nearly equal halves
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  // re-apply mergeSort recursively until each half reaches the base case of length === 1
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  // stitch the sorted smallest subarrays together to grdually create larger sorted subarrays
  return stitch(sortedLeft, sortedRight);
}

// helper function
function stitch(left,right) {
  const results = [];
  // loop until length of subarrays reaches zero
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift())
    }
  }
  // finally concatenate the sorted results array with any leftovers
   return results.concat(left, right);
}

// mergeSort([8,2,5,12,3])
