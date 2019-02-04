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
