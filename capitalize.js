// write a function that capitalizes the first letter of every word in a string

function capitalize(str) {
  let result = [];
  for (let word of str.split(" ")) {
    result.push(word[0].toUpperCase() + word.slice(1))
  }
  return result.join(" ")
}

capitalize("a lazy fox")
