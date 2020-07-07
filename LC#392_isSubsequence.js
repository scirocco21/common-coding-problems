/*
Given a string s and a string t, check if s is subsequence of t.
*/

var isSubsequence = function(s, t) {
  if (s.length > t.length) {
      return false;
  }
  let stringPointer = 0;
  let targetPointer = 0;
  while (stringPointer < s.length && targetPointer < t.length) {
      if (s[stringPointer] === t[targetPointer]) {
          stringPointer++;
          targetPointer++
      } else {
          targetPointer++
      }
  }
  if (stringPointer < s.length) {
      return false;
  } else {
      return true
  }
};