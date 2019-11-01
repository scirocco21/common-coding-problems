/*
Given a non-negative integer num, repeatedly 
add all its digits until the result has only one digit.

 @param {number} num
 @return {number}
 */
var addDigits = function(num) {
  while(num.toString().split("").length > 1) {
      num = num
          .toString()
          .split("")
          .map(char => parseInt(char))
          .reduce((acc,curr) => acc+curr)
  }
  return num
};