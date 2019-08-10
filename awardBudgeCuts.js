function findGrantsCap(grantsArray, newBudget) {
  let length = grantsArray.length;
  // sort in reverse order: largest grants first
  grantsArray = grantsArray.sort((a,b) => b - a);
  // add zero at the end in case the cap is below the smallest grant in the array
  grantsArray.push(0);
  // calculate how much excess spending there is
  let surplus = grantsArray.reduce((total, num) => total + num) - newBudget; 
  // if the costs of all grants does not exceed the new budget, the cap is just the largest grant
  if (surplus <= 0) {
    return grantsArray[0]
  }
  // iterate over grants array
  for (let i = 0; i < length; i++) {
    // update surplus for each successive potential cap
    surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1]);
    // once you reduce excess spending to zero or below, add it back to the last cap value, distributed over all grants 
    if (surplus <= 0) {
      return grantsArray[i+1] + (-1 * surplus / (i + 1))
    }
  }
}
findGrantsCap([2,3], 3)