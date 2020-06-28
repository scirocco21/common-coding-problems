function buildWordcloud(string) {
  let wordCloud = new Map();
  let startIndex = 0;
  let word = "";

  while (startIndex < string.length) {
    if (isPossessive(string[startIndex])) {
      includeWord(word, wordCloud);
      // skip ahead if you encounter a possessive ending
      startIndex += 2;
      word = ""
    } else if (isLetter(string[startIndex]) || nonSplitting(string[startIndex])) {
      word += string[startIndex].toLowerCase();
      startIndex++
    } else {
      includeWord(word, wordCloud);
      startIndex++
      word = "";
    }
    
  }  
  return wordCloud
}

// helper functions

// check if character is letter
function isLetter(character) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
}
// hyphens should not split up words
function nonSplitting(character) {
  return '-'.indexOf(character) >= 0
}
// possessive endings should not be part of the map
function isPossessive(character) {
  return character === "'"
}
// check if a word is already a key in the map 
function includeWord(word, wordCloud) {
  if (wordCloud.has(word)) {
    wordCloud.set(word, wordCloud.get(word) + 1)
  } else if (word !== ""){
    wordCloud.set(word,1)
  }
}

buildWordcloud("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake.")