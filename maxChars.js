// write a function that returns the most frequent character in a string. If the string contains multiple words, ignore any spaces in the count.

function maxChars(str) {
  let count = {};
  let sanitisedStr = str.split(" ").join("")
  for (char of sanitisedStr) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  let maxChar;
  let maxCount = 0;
  for (char in count) {
    if (count[char] > maxCount) {
      maxCount = count[char]
      maxChar = char;
    }
  }
  return maxChar
}

maxChars("Hello there")
