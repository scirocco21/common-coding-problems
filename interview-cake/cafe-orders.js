/* write a function to check that a service is first-come, first-served. 
All food should come out in the same order customers requested it.

Example:   

Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 4, 6, 5, 3]

This is not first-come, first-served because order 5 is served before order 3
*/

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) 
{
  let pointerA = 0;
  let pointerB = 0;
  let index = 0;
  // iterate through servedOrders and move pointers along takeoutOrders and dineInOrders if there's a match
  while (index < servedOrders.length) {
    if (pointerA < takeOutOrders.length && servedOrders[index] === takeOutOrders[pointerA]) {
      pointerA++;
    } else if (pointerB < dineInOrders.length && servedOrders[index] === dineInOrders[pointerB]) {
      pointerB++;
  // if there is no match for the current order in either register, exit procedure with false
    } else {
      return false;
    }
    index++
  }

  // if there are orders in either register that have not been received by the kitchen (i.e., are not in servedOrders), exit procedure with false  
  if (pointerA !== takeOutOrders.length || pointerB !== dineInOrders.length) {
    return false;
  }
  return true;
}