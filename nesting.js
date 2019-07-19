// problem: write an efficient function that returns 1 if a string containing only brackets (if any) is properly nested, and 0 if it isn't. 

function solution(S) {
  let openBrackets = [];
  let bracketsArray = S.split("");
  
  for (let bracket of bracketsArray) {
    // keep track of opening brackets
    if (bracket === "(") {
      openBrackets.push(bracket);
      // pop last opening bracket of the stack if it can be matched with a closing bracket
    } else if (openBrackets.length != 0 && bracket === ")") {
      openBrackets.pop()
      // if there is an unmatched closing bracket, return 0
    } else if (openBrackets.length === 0 && bracket === ")") {
      return 0
    }
  }
  // return true if there are no unpopped opening brackets left
  return openBrackets.length === 0? 1 : 0;
}

// solution("()))") => returns 0