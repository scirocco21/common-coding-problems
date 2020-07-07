/*
At a lemonade stand, each lemonade costs $5. 

Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.
*/
var lemonadeChange = function(bills) {
  let fivers = 0;
  let tenners = 0;
  
  for (let bill of bills) {
      if (bill === 5) {
          fivers++;
      } else if (bill === 10 && fivers > 0) {
          tenners++;
          fivers--;
      } else if (bill === 20 && tenners > 0 && fivers > 0) {
          tenners--;
          fivers--;
      } else if (bill === 20 && tenners === 0 && fivers >= 3) {
          fivers -= 3;
      } else {
          return false;
      }
  }
  return true;
};