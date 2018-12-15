function quickSort(nums) {
  // base case where array length is 1 or less
  if (nums.length <= 1) return nums;
  // select last element as pivot (for the sake of this implementation)
  const pivot = nums[nums.length - 1];
  // create two subarrays that will be filled: one with numbers less than the pivot, one with numbers larger than the pivot. The pivot will not be included in either
  const left = [];
  const right = [];
  // iterate over all elements in nums EXCEPT the last one, which is being used for the pivot
  for (let i = 0; i < nums.length - 1; i++) {
  // left is filled with numbers smaller than pivot
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
  // right contains all the larger ones
      right.push(nums[i]);
    }
  }
  // use spread syntax to return array composed of numbers smaller than the pivot, the pivot, and numbers larger than the pivot
  return [...quickSort(left), pivot, ...quickSort(right)]
}

// Test case:
// quickSort([2,1,8,9,4,6])
