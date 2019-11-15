// given an alphatbetically sorted string, write a function that returns whether or not the string contains any non-repeating characters

function nonRepeat(string) {
  let nonRepeater = string[0];
  for (let i = 1; i < string.length; i+=2) {
    if (nonRepeater === string[i]) {
      nonRepeater = string[i+1]
    } else {
      return true
    }
  } return false
}

// if the string is not sorted, use different strategy:
// 1. build a character count hash
//  2. iterate over the keys in the hash and check if any of them correspond to a value of one
function nonRepeat(string) {
  let count = {};
  for (let i = 0; i < string.length; i++) {
    if (count[string[i]]) {
      count[string[i]] += 1;
    } else {
      count[string[i]] = 1;
    }
  }
    for (var char in count) {
      if (count[char] === 1) {
        return true;
      }
    }
  return false;
}
