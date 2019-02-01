///  write a function that compares two strings and determines whether they are one edit away from each other. 'An edit' means either changing one character to another, deleting one character or adding one. A character can be 'changed' to the same character, so two identical characters are one edit away from each other as well.

function oneEditAway(string1, string2) {
  // case 1: two string have same length
  if (string1.length === string2.length) {
    return sameLengths(string1, string2)
  }
  // case two: the two strings have different lengths that can't be obtained with only one edit
  if (string1.length - string2.length > 1 || string2.length - string1.length > 1) {
    return false
  } else if (string1.length > string2.length) {
    return differentLengths(string1, string2)
  } else {
      return differentLengths(string2, string1)
  }
}

// helper functions
function sameLengths(string1, string2) {
  let diff = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] != string2[i]) {
      diff++;
    }
    if (diff > 1) {
      return false;
    }
  }
  return true;
}

// compare strings of different lengths - assume that the first input is the longer string
function differentLengths(string1, string2) {
  console.log("I fired")
  let diff = 0;
  let i = 0;
   while (i < string2.length) {
    if (string1[i + diff] == string2[i]) {
      i++;
    } else {
      diff++;
      if (diff > 1) {
        return false
      }
    }
  }
  return true
}

oneEditAway("blaba", "blabb")
