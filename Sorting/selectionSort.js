// Selection Sort aka "Prove me wrong algorithm"

function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    // assume i is the index of the lowest item in the array
    let indexOfMin = i;
    for (let j = i + 1; j < nums.length; j++) {
      // check assumption is true; if it isn't, reassign indexOfMin
      if (nums[j] < nums[indexOfMin]) {
        indexOfMin = j;
      }
    }
    // if i is not the lowest item in the array, swap the two 
    if (i !== indexOfMin) {
      const lesser = nums[indexOfMin];
      nums[indexOfMin] = nums[i];
      nums[i] = lesser;
    }
  }
  return nums;
}

selectionSort([6,5,4,3,2])