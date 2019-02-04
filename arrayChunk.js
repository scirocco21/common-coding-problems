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

// alternative solution
function arrayChunk(arr, n) {
  const result = [];
  for (let el of arr) {
    const last = result[result.length - 1];
    if (!last || last.length === n) {
      result.push([el]);
    } else {
      last.push(el);
    }
  }
  return result;
}

arrayChunk([1,2,3,4, 5], 3)
