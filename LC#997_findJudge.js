/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  if (trust.length === 0 && N === 1) {
      return 1
  } 
  let dict = {}
  for (let pairs of trust) {
      let trustingPerson = pairs[0]
      if (dict[trustingPerson]) {
          dict[trustingPerson].isTrusting = true
      } else {
          dict[trustingPerson] = {
              isTrusting: true,
              trusters: []
          }
      }
      let trustedPerson = pairs[1]
      if (dict[trustedPerson] && !dict[trustedPerson].trusters.includes(pairs[0]))         {
          dict[trustedPerson].trusters.push(pairs[0])
      } else {
          dict[trustedPerson] = {}
          dict[trustedPerson].trusters = [pairs[0]]
      }
  }
  for (let key in dict) {
      if (dict[key].trusters.length === N - 1 && !dict[key].isTrusting) {
          return key
      }
  }
  return -1 
};