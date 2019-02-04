// write a function that chunks a given array into as many subarrays ("chunks") of n lengths as possible

function arrayChunk(arr, n) {
  const result = [];
  let counter = arr.length;
  while (counter > 0) {
    result.push(arr.slice(0,n))
    counter -=n;
    arr = arr.slice(n)
  }
  return result
}
// variant:
function arrayChunk(arr, n) {
  const result = [];
  let index = 0;
  while (index < arr.length) {
    // increment index for each iteration to define start and end of slice dynamically
    result.push(arr.slice(index, n + index))
    index += n;
  }
  return result
}

// alternative solution
function arrayChunk(arr, n) {
  const result = [];
  for (let el of arr) {
    const last = result[result.length - 1];
    // if result contains no subarrays or its last subarray is full, make a new subarray with element
    if (!last || last.length === n) {
      result.push([el]);
    } else {
    // otherwise fill up the last subarray
      last.push(el);
    }
  }
  return result;
}

arrayChunk([1,2,3,4, 5], 3)
