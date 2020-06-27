/*
Write a function that takes an array of characters and reverses the letters in place.
*/
function reverse(arrayOfChars) {
  if (arrayOfChars.length === 0) {
    return arrayOfChars
  }
  let end = arrayOfChars.length - 1;
  let beginning = 0;
  // swap each pair of characters until the midpoint
  while (beginning < end) {
    let temp = arrayOfChars[beginning]
    arrayOfChars[beginning] = arrayOfChars[end];
    arrayOfChars[end] = temp;
    beginning++;
    end--;
  }
  return arrayOfChars;
}