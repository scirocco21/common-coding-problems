// write a function that accepts a positive integer n and logs out n number of steps, where each step shows an increasing number of "#" characters, starting a 1. E.g.:
// step(3)
// '#  '
// '## '
// '###'

function steps(n) {
    for (let row = 1; row <= n; row++) {
      let string = "";
      for (let col = 1; col <= n; col++) {
        // increment pound sign only if column is less or equal to row
        if (col <= row) {
          string += "#"
        } else {
          string += "_"
        }
      }
    console.log(string)
  }
}

steps(4)

// recursive solution  (note default arguments)
function steps(n, row = 0, stair = "") {
  // base case: once the function has built n number of 'rows', exit
  if (row === n) {
    return
  }
  // if the stair string has n number of characters, console.log it and call the function with rows increased by one
  if (stair.length === n) {
    console.log(stair);
    steps(n, row + 1, stair = "")
  } else {
  // otherwise keep building the string
    if (stair.length <= row) {
      stair += "#";
      steps(n, row, stair)
    } else {
      stair += "_"
      steps(n, row, stair)
    }
  }
}
