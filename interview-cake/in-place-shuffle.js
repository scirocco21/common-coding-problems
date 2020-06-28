function shuffle(array) {
  const randomNumbers = [];
  let index = 0
  while (index < array.length) {
    let num = generateNum(array.length)
    if (!randomNumbers.includes(num)) {
      randomNumbers.push(num)
      index++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    swap(array,i,randomNumbers[i])
  }  
  return array;
}

// helper functions
function generateNum(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
function swap(array,oldIndex,newIndex) {
  let temp = array[oldIndex];
  array[oldIndex] = array[newIndex];
  array[newIndex] = temp; 
}

console.log(shuffle([1,2,3]))