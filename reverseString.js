// note: Javascript strings are immutable; true in place reversal is not possible:

// NOT POSSIBLE:
// function reverseString(str) {
//   let middle = Math.ceil(str.length/2);
//   let lastIndex = str.length - 1;
//   for (let i = 0; i < middle; i++) {
//     let temp = str[i];
//     str[i] = str[end - i];
//     str[end - 1] = temp
//   }
//   return str
// }

// string builder solution:
function reverseString(str) {
  let newStr = ""
  for (let i = str.length - 1; i >= 0; i --) {
    newStr += (str[i])
  }
  return newStr
}

// array.join() method:
function reverseString(str) {
  let newStr = [];
  for (let i = str.length -1; i >= 0; i --) {
    newStr.push(str[i])
  }
  return newStr.join("")
}

// use native Javascript reverse method instead of for loop
function reverseString(str) {
  // split string into chars array, then reverse array and stitch it back together
  return str.split('').reverse().join('');
}

// avoid using classic for loop by using ES 2015 notation
function reverseString(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
