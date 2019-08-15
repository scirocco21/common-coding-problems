// Iterative solution 
const binarySearch = (arr, query) => { 
  let start = 0; 
  let end = arr.length-1; 
  // continue looping as long as start does not exceed end
  while (start<=end){  
		// Find middle index 
		let mid = Math.floor( (start + end) / 2 );
		// If query element is present at midpoint, exit loop and return true
		if (arr[mid] === query) return true; 
		// Else look in left or right half 
		else if (arr[mid] < query) {
      start = mid + 1; 
    }
		else {
      end = mid - 1; 
    }
  } 
  // if the loop exits without finding query element, return false
	return false; 
} 

// Test
// let arr = [1, 3, 5, 7, 8, 9]; 
// let query = 2;
// binarySearch(arr, 10)
