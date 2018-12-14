// continue looping over all items in the array as long as any swaps between out of place numbers take place. Only once the function has looped over a fully sorted array without swapping will it exit and return the modified array.

function bubbleSort(nums) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i+1]) {
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped)
  return nums
}
