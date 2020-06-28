/* 
Write an efficient function that checks whether any permutation of an input string is a palindrome.
*/

/*A. O(n * logn) solution

function permutationPalindrome(string) {
  let sorted = string.split("").sort();
  // isPalindrome tracks the number of times two characters differ from each other. If at the function execution, this value drops below zero (there is more than one unmatched character in the string), the string cannot be changed into a palindrome
  let isPalindrome = 0;
  let i = 0;
  let j = 1;

  while (j < sorted.length) {
    if (sorted[j] === sorted[i]) {
      isPalindrome++;
    } else {
      isPalindrome--;
    }
    i++;
    j++;
  }
  if (isPalindrome < 0) {
    return false
  }
  return true
}
*/

// B. O(n) solution
function permutationPalindrome(string) {
  let seen = new Set();
  for (let char of string) {
    if (!seen.has(char)) {
      seen.add(char)
    } else {
      seen.delete(char);
    }
  }
  if (seen.size > 1) {
    return false;
  }  
  return true;
}

permutationPalindrome("ivicc")