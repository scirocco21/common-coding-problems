// Write a function that takes  a string as input and 
// reverses only the vowels of a string.

// reverseVowels("hello") => "holle"

var reverseVowels = function(s) {
  const vowels = ["a","e","i","o","u", "A", "E", "I", "O", "U"];
  let vowelsInS = []
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (vowels.includes(char)) {
          vowelsInS.push(vowels[vowels.indexOf(char)]);
      }
  }
  let result = "";
  let reverseIndex = vowelsInS.length - 1
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (vowels.includes(char)) {
          result += vowelsInS[reverseIndex];
          reverseIndex--;
      } else {
          result += char
      }
  
  }
  return result
};