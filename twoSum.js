// Given an array of numbers and a sum, write a function that will return whether any pair of distinct numbers in the array adds up to the sum

// Set based solution
function twoSum(nums, sum) {
  let seen = new Set
  for (let num of nums) {
    if (seen.has(sum - num)) {
      return true;
    } else {
      seen.add(num)
    }
  }
  return false
}
