// Uncomment to visualize

// Idea is to gradually expand sorted area; anything lying outside the sorted area remains in place, if it simply extends the sorted area, or is inserted into its proper position in the sorted array through the slice method.

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++ ) {
      // console.log(nums[i], nums[j])
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1)
        nums.splice(j, 0, spliced[0])
      }
       // console.log(nums)
    }
  }
  return nums
}

// Example:
// insertionSort([8,2,5,12,3])
// [ 8, 2, 5, 12, 3 ]
// 2 8
// [ 2, 8, 5, 12, 3 ]
// 5 2
// [ 2, 8, 5, 12, 3 ]
// 5 8
// [ 2, 5, 8, 12, 3 ]
// 12 2
// [ 2, 5, 8, 12, 3 ]
// 12 5
// [ 2, 5, 8, 12, 3 ]
// 12 8
// [ 2, 5, 8, 12, 3 ]
// 3 2
// [ 2, 5, 8, 12, 3 ]
// 3 5
// [ 2, 3, 5, 8, 12 ]
// 12 5
// [ 2, 3, 5, 8, 12 ]
// 12 8
// [ 2, 3, 5, 8, 12 ]
// => [ 2, 3, 5, 8, 12 ]
