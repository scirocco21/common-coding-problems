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
