// write a function that capitalizes the first letter of every word in a string

// solution 1: split string into words and capitalize first letter of each one
function capitalize(str) {
  let result = [];
  for (let word of str.split(" ")) {
    result.push(word[0].toUpperCase() + word.slice(1))
  }
  return result.join(" ")
}

capitalize("a lazy fox")

// solution 2: capitalize first letter of string, and then any subsequent letter that follows a space
function capitalize(str) {
  let result =  str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}
