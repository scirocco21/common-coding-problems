function findGrantsCap(grantsArray, newBudget) {
  let length = grantsArray.length;
  grantsArray = grantsArray.sort((a,b) => b - a);
  grantsArray.push(0);
  let surplus = grantsArray.reduce((total, num) => total + num) - newBudget; 
  if (surplus <= 0) {
    return grantsArray[0]
  }
  for (let i = 0; i < length; i++) {
    surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1]);
    if (surplus <= 0) {
      return grantsArray[i+1] + (-1 * surplus / (i + 1))
    }
  }
}
findGrantsCap([2,3], 3)