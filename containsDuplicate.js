// write a function that return whether or not a given array contains any duplicates

// solution 1: create hash table, then check if hash table contains only single terms, in which case return false

function containsDuplicate(arr) {
  let histogram = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (!!histogram[num]) {
      histogram[num] += 1;
    } else {
      histogram[num] = 1;
    }
  }
  return !Object.values(histogram).every(val => val === 1);
}

// solution 2: sort array, then find duplicate by moving pointer across:

function containsDuplicate(arr) {
  let sortedArray = arr.sort((a,b) => a - b)
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return true
    }
  }
  return false;
}
