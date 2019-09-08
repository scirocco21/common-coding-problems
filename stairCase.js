// given a staircase with n steps, and given that you can go up either in steps of one or two at a time, how many ways are there to reach the top of the staircase?

var climbStairs = function(n) {
  let stairClimbs = {}
  let numClimbs;
  // use inner function for memoization logic
  function inner(n) {
    if (stairClimbs[n]) {
      numClimbs = stairClimbs[n]
    } else if (n === 1 || n === 2) {
      numClimbs = n    
   } else {
      numClimbs = inner(n - 1) + inner(n-2);
      stairClimbs[n] = numClimbs;
    }
    return numClimbs;
  }
  // returns numClimbs
  return inner(n)
};