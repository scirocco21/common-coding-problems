// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

function rotateImage(a) {
  const result = [];
  const last = a.length - 1;
  // set up empty 2D array
  for (let row of a) {
      result.push([]);
  }
  // loop through every row of the original array:
  // the first row will become the last column, the second the second last, etc; 
  // generally the i-th row will become the last index minus i-th column.

  // for a, [i] represents rows; for result, items in the row (i.e. columns)
  // for result, j represent rows; for a, j represents items in the row (i.e. columns)
  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
          result[j][last - i] = a[i][j]
      }
  }
  return result;
}
// Input:
  // a: [[1,2,3], 
  // [4,5,6], 
  // [7,8,9]]
// Expected Output:
  // [[7,4,1], 
  // [8,5,2], 
  // [9,6,3]]