// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
  let longestPrefix = "";
  if (!strs.length) {
      return longestPrefix
  }
  for (let j = 0; j < strs[0].length; j++) {
      let seed = strs[0][j]
      for (let i = 1; i < strs.length; i++) {
          if (strs[i][j] !== seed) {
              return longestPrefix;
          }
      }
      longestPrefix += seed
  }
  return longestPrefix;
};