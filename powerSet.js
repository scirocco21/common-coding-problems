// Write a function that accepts a given set of values 
// in an array and generates the power set from it
function subsets(nums) {
  let result = [[]];
  for (let num of nums) {
    result = [...result, ...result.map(set => set.concat(num))]
  }
  return result.length
}
subsets([1,2,3])
// => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]