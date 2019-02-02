// write a function that reverses an integer, e.g. given -90, the function return -9

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
