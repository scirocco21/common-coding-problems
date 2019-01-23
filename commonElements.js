// write a function that returns all elements that are common between two arrays.

// Strategy: use two pointers to facilitate comparison between items in the two arrays. Move the pointers until the end of one of the arrays.

function commonElements(array1, array2) {
  let commonItems = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (array1[pointer1] === array2[pointer2]) {
      commonItems.push(array1[pointer1]);
      pointer1 += 1;
      pointer2 += 1;
    }
    else if (array1[pointer1] > array2[pointer2]) {
      pointer2 += 1
    }
    else {
      pointer1 += 1
    }
  }
  return commonItems
}
