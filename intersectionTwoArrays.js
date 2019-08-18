// Write a function that will return the intersection (array of unique share values) of two input arrays.
// E.g. for [2,1,3,4] and [1,3], return [1,3]

function intersection(nums1, nums2) {
  let intersection = [];
	let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  // optimization for speed: 
  // only check values from smaller set against the larger
	let smallest;
  let larger;
  if (set1.size < set2.size) {
  	smallest = set1;
    larger = set2;
  } else {
  	smallest = set2;
    larger = set1;
  }
  // optimization for speed: 
  // only check values from smaller set against the larger
  for (let elem of smallest) {
   	if (larger.has(elem)) {
    	intersection.push(elem);
    }
  }
  
  return intersection;
}