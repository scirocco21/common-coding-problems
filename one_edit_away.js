//  write a function that compares two strings and determines whether they are one edit away from each other. 'An edit' means either changing one character to another, deleting one character or adding one. A character can be 'changed' to the same character, so two identical characters are one edit away from each other as well.

function oneEditAway(string1, string2) {
  // case 1: two string have same length
  let diff = 0;
  for (let i = 0; i < string.length; i++) {
    if (string1[i] != string2[i]) {
      diff++;
    }
    if (diff > 1) {
      return false;
    }
  }
}
