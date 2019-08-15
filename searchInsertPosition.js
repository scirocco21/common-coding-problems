// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

var searchInsert = function(arr, query) {
let start = 0; 
let end = arr.length-1; 
while (start<=end) {  
  let mid = Math.floor( (start + end) / 2 );
  if (arr[mid] === query) return mid
  else if (arr[mid] < query) {
      start = mid + 1; 
  }
  else {
      end = mid - 1; 
  }
} 
return start; 
} 