// 1. initialize empty count hash
// 2. iterate over array: a. either create key with value for new item, or increase value by one if key exists
                      // b. keep track of most frequently occuring item and the frequency count of that item
// The function returns a result in O(n) time.

function mostFrequent(array) {
  let max_count = 0;
  let max_item = array[0];
  let freqHash = {};
  for (let num of array) {
    if (freqHash[num]) {
      freqHash[num] += 1 ;
    } else {
      freqHash[num] = 1
    }
    if (freqHash[num] > max_count) {
      max_count = freqHash[num]
      max_item = num
    }
  }
  return max_item
}
