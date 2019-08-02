// write a function that reverses an integer, e.g. given -90, the function return -9
// =======
// SOLUTION 1
// =======
function reverseInt(int) {
  if (int > -1) {
    return parseInt(reverseStringifiedInt(String(int)))
  }
  else {
    let sanitisedInt = String(int).slice(1);
    let result = reverseStringifiedInt(sanitisedInt);
    return parseInt(result) * -1
  }
}

// helper function
function reverseStringifiedInt(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// ========== more succint solution =========
// SOLUTION 2 //
//=========== 
function reverseInt(int) {
  const reversed = int
    .toString()
    .split('')
    .reverse()
    .join('')

  return parseInt(reversed) * Math.sign(int);
}


//====== alternative solution =====
// SOLUTION 3
//=======
function reverseInt(n) {
  let multiplier = 1;
  let result = ""
  if (n < 0) {
    n = n * -1;
    multiplier = -1;
  }
  let stringifiedN = n.toString();
  for (let char of stringifiedN) {
    result = char + result;
  }
  return parseInt(result) * multiplier
}
