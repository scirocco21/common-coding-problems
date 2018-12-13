// given a sorted array of numbers, write a function that will return the length of a new array that would result from removing all duplicates. E.g. removeDuplicates([1,1,2,2]) will return 2, because [1,2] has a length of 2

// solution 1: count all the duplicate pairs and then subtract the count from the total number of elements

function removeDuplicates(nums) {
  let i = 0;
  let counter = 0;
  for(let j = 1; j < nums.length; j++){
    if(nums[i] == nums[j]){
      counter += 1
    }
  i++;
  }
  return nums.length - counter;
};

// solution 2: keep track of all pairs of different numbers, moving pairwise through the array. Then return the count plus one, since e.g. [1,2,3] contains two pairwise differences but threee distinct numbers

function removeDuplicates(nums) {
  let i = 0;
  let counter = 0
  for(let j = 1; j < nums.length; j++){
    if(nums[i] != nums[j]) {
      counter += 1
    }
    i++
  }
  return counter + 1;
};

//solution 3: faster solution: count the pairwise difference but instead of using counter simply increment the counter but substitute j for i every time. E.g. [1,1,2,2,3] has two pairwise differences but to prevent double counting, i has to not only be moved but also be substituted with 2.

function removeDuplicates(nums) {
  let i = 0;
  for(let j = 1; j < nums.length; j++){
    if(nums[i] != nums[j]){
      i++;
      nums[i]=nums[j];
    }
  }
  return i+1;
};

removeDuplicates([0,0,1,1])
