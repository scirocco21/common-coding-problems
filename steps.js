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
