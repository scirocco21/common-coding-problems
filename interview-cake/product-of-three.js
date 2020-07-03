
// Write a function that return the highest product of three numbers in an arary of integers. Assume the array will contain only positive numbers. 
function findMaxProduct(array) {
  let largest = 0;
  let secondLargest = 0;
  let thirdLargest = 0;
  let i = 0;
  if (array.length < 3) {
    throw "You need a minimum of three numbers to multiply three numbers"
  }
  while (array[i]) {  
    if (array[i] >= largest) {
      let temp1 = largest;
      let temp2 = secondLargest;
      largest = array[i];
      secondLargest = temp1;
      thirdLargest = temp2;
    } else if (array[i] >= secondLargest) {
      let temp = thirdLargest;
      secondLargest = array[i];
      thirdLargest = temp
    } else if (array[i] >= thirdLargest) {
      thirdLargest = array[i]
    }
  i++;
  }
  return largest*secondLargest*thirdLargest
}

console.log(findMaxProduct([8,3,9,3,9]))