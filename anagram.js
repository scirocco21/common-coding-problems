// write a function that checks whether two strings are anagrams of each other. Ignore capital letters, punctuation and spaces.

function isAnagram(stringA, stringB) {
// 1. sanitize both strings to get rid of punctuation, upper case, spaces etc.
  let cleanA = sanitize(stringA);
  let cleanB = sanitize(stringB);
// 2. if their lengths are different, they can't be anagrams
  if (cleanA.length !== cleanB.length) {
    return false
  } else {
// otherwise, build character map for each string
    let aHash = makeHash(cleanA);
    let bHash = makeHash(cleanB);
    for (let key in aHash) {
      if (aHash[key] !== bHash[key]) {
        return false
      }
    }
  }
  return true;
}


// Alternative version of main function
function isAnagram(stringA, stringB) {
  let aHash = makeHash(sanitize(stringA));
  let bHash = makeHash(sanitize(stringB));
  // compare both Hashes to see if they have equal number of keys
  if (Object.keys(aHash).length !== Object.keys(bHash).length) {
    return false
  }
  for (let key in aHash) {
    if (aHash[key] !== bHash[key]) {
      return false
    }
  }
  return true;
}

// SOLUTION 2

function isAnagram(a,b) {
  let cleanA = sanitize(a)
  let cleanB = sanitize(b)

  for (let i = 0; i < cleanA.length; i++) {
    if (cleanA.split("").sort()[i] !== cleanB.split("").sort()[i]) {
      return false
    }
  }
  return true
}


// ===============
// helper functions

function sanitize(str) {
  return str.replace(/[^\w]/g, "").toLowerCase()
}

function makeHash(str) {
  let count = {};
  for (let char of str) {
      count[char] = count[char] + 1 || 1;
  }
  return count
}

isAnagram("Arc!!", "car")
