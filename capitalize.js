// write a function that capitalizes the first letter of every word in a string

function capitalize(str) {
  let words = str.split(" ");
  let result = [];
  for (let word of words) {
    let initial = word[0].toUpperCase()
    let rest = word.slice(1)
    result.push(initial + rest)
  }
  return result.join(" ")
}

capitalize("a lazy fox")
