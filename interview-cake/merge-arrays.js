function mergeArrays(A,B) {
  let pointerA = 0;
  let pointerB = 0;
  let mergedArray = [];

  while (pointerA < A.length && pointerB < B.length) {
    if (A[pointerA] <= B[pointerB]) {
      mergedArray.push(A[pointerA]);
      pointerA++;
    } else if (B[pointerB] <= A[pointerA]) {
      mergedArray.push(B[pointerB]);
      pointerB++;
    }
  }
  // account for arrays of unequal length
  if (pointerA < A.length) {
    mergedArray.push(...A.slice(pointerA))
  }
  if (pointerB < B.length) {
    mergedArray.push(...B.slice(pointerB))
  }
  return mergedArray;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [];
console.log(mergeArrays(myArray, alicesArray));
