// write a function that determines whether some array b is a rotation of some other array a. Ignore duplicates.

function isRotation(a,b) {
  // set key to some arbitrary value, and key_index to the corresponding index
  let key = a[0];
  let key_index = 0;
  // if the two arrays have unequal lengths, they can't be rotations of each other
  if (a.length !== b.length) {
    return false;
  // if there is no overlap of at least one element between the two arrays, they can't be rotations of each other
  } else if (!b.includes(key)) {
    return false;
  } else {
  // find out the index of key in the rotated array
    for (let i = 0; i < b.length; i++) {
      if (b[i] === key) {
        key_index = i;
      }
    }
  // check whether b contains the same elements as a, accounting for b's rotation
    for (let j = 0; j < a.length; j++) {
      let offset = (key_index + j) % a.length;
      if (a[j] != b[offset]) {
        return false;
      }
    }
  }
  return true
}

isRotation([1,2,3], [2,1])
