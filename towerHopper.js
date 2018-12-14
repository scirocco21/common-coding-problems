// rules of Tower Hopper: input is array of tower heights. You can jump as many places as your current tower is tall, or less. The function needs to return whether or not it is possible to hop outside the array (i.e. to position towers[towers.length] or greater)

// helper method: what is the best next step, given a particular index?
function nextStep(index, towers) {
  // first check if it is possible to step outside the array - if so, this is the next best step
  let tempSum = towers[index] + index;
  if (tempSum >= towers.length) {
    return towers[index] + index
  } else {
  // otherwise, evaluate all reachable towers and pick the one with the highest value that is farthest away (i.e. if two towers have the same value, pick the most distant one)
    let nextIndex;
    for (let i = index + 1; i < towers[index] + index; i++ ) {
      if (towers[i + 1] >= towers[i]) {
        nextIndex = i + 1
      }
    }
    return nextIndex
  }
}

// main function
function isHoppable(towers) {
  let current = 0;
  while (true) {
    if (current >= towers.length) {
      return true
    };
    if (towers[current] === 0) {
      return false
    };
    current = nextStep(current, towers)
  }
}
