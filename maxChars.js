// write a function that returns the most frequent character in a string. If the string contains multiple words, ignore any spaces in the count.

// succinct version
function maxChars(str) {
  let count = {};
  for (let char of str.split(" ").join("")) {
      count[char] = count[char] + 1 || 1;
  }
  let maxChar;
  let maxCount = 0;
  for (let char in count) {
    if (count[char] > maxCount) {
      maxCount = count[char]
      maxChar = char;
    }
  }
  return maxChar
}
