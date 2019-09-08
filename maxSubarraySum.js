// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
  // initialize both maxima to negative infinity to deal with negative numbers
  let globalMax = Number.NEGATIVE_INFINITY;
  let localMax = Number.NEGATIVE_INFINITY;

  for (let num of nums) {
      // For every number, is that number larger than the previous localmax plus that number?
      localMax = Math.max(num, localMax + num);
      // Is the current localmax greater than the globalmax?
      globalMax = Math.max(globalMax, localMax);
  }
  return globalMax
};