// write a function that chunks a given array into as many subarrays ("chunks") of n lengths as possible

function arrayChunk(arr, n) {
  let result = [];
  let counter = arr.length;
  while (counter > 0) {
    result.push(arr.slice(0,n))
    counter -=n;
    arr = arr.slice(n)
  }
  return result
}

arrayChunk([1,2,3,4, 5], 3)
