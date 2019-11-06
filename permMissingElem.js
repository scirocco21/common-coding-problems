
// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

function solution(A) {
  if (A.length === 0) {
    return 1;
  }
  let totalOfA = 0;
  let largest = A[0]
  
  // keep track of the total of all items in the target array AND the largest number in the array
  for (let num of A) {
      totalOfA += num;
      if (largest < num) {
        largest = num
      }
  }
  // Take into account that the array could contain sequential numbers
  if (largest === A.length) {
    largest += 1
  }
  // Figure out what the total ought to be, using Euler's formula
  let totalOfSequence = (largest * (largest + 1)) / 2 
  // done!
  return totalOfSequence - totalOfA;
}

// solution([1,2,3,4]