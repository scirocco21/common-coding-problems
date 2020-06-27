function reverseWordOrder(array) {
  /* first swap all the characters in the array, e.g.:
  ["m","e","e","t"," ","l","e","t","s"] => ["s","t","e","l"," ", "t","e","e","m"]
  */
  let beginning = 0;
  let end = array.length - 1;
  let temp;

  while(beginning < end) {
    temp = array[end];
    array[end] = array[beginning]
    array[beginning] = temp
    beginning++;
    end--;
  }
  // then call helper function that reverses each word in the reverse array
  reverseAllWords(array)
}
// iterate over input array and chunk it into words by keeping track of spaces
function reverseAllWords(array) {
  let startIndex = 0;
  for (let i = 0; i < array.length; i++) {
      // if you reach the end of the array, pass the last index into reverseCharacter function
    if (i === array.length - 1) {
      reverseCharacters(array,startIndex, i);
      // otherwise the end of the word is the index before the white space character
    } else if (array[i] === " ") {
      reverseCharacters(array,startIndex,i-1)
      // update the start index on every iteration to move through the array word by word
      startIndex = i + 1
    }
  }
}
// reverse the order of characters in an array, given a starting and end index
function reverseCharacters(array,startIndex, endIndex) {
  let temp;

  while(startIndex < endIndex) {
    temp = array[endIndex];
    array[endIndex] = array[startIndex]
    array[startIndex] = temp
    startIndex++;
    endIndex--;
  }
}

reverseWordOrder(["m","e","e","t"," ","l","e","t","s"])