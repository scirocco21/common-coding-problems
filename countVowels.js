// write a function that counts the vowels in a given string

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count
}

// regex alternative
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
