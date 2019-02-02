function isPalindrome(str) {
  return str === reverseString(str)
}

// helper function (check reverseString.js file)
function reverseString(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}


// alternative solution: check if every character is equal to its mirror image in the character array - but note that the number of comparisons is double what is required
function isPalindrome(str) {
  return str.split("").every( (char, i) => {
      return char === str[str.length - i - 1]
  })
}

// improved version: find array mid-point and use while loop
function isPalindrome(str) {
  const midPoint = str.length/2 + 1
  let i = 0;
  while (i < midPoint) {
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
    i++;
  } return true
}
