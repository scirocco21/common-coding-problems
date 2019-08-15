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

// simpler implementation with nested for loops
function bubbleSort(arr) {
  // loop over the array n number of times
  for (let i = 0; i < arr.length; i++ ) {
    // each time swap every two elements where appropriate
    // NOTE: make sure inner loop does not exceed array bounds (i.e. arr[j+1] can be visited)
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

