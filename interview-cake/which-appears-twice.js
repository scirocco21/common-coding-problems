/* 
You're given an array of n + 1n+1 numbers. Every number in the range 1..n1..n appears once except for one number that appears twice.

Write a function for finding the number that appears twice.
*/

function findDuplicate(array) {
  let largest = array.length - 1;
  let seriesSum = (largest + 1) * (largest/2)
  let arraySum = array.reduce((curr,acc) => curr+acc)
  // The duplicate number is equal to the difference between the sum of the array and the sum of the series up to n
  return arraySum - seriesSum
}

findDuplicate([1,2,2,3])