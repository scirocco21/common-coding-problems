// Given a value k and a linked list with head node l, remove all nodes with value k from the list

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  // check list is non-empty
  if (!l) {
    return null
  }
  // if head node has value of k, delete from beginning until the starting value does not equal k
  while (l.value === k && l.next) {
    l = l.next;
  }
  // if there is only one node left and it has value of k, return empty array
   if (!l.next && l.value === k) {
    return []
  }
  // iterate through list as long as node is truthy
  let node = l;
  while(node) {
    // take into account cases where values of k appear one after the other, e.g. [1,2,2,1] for k = 2, to return [1,1]
    while (node.next && node.next.value === k) {
      node.next = node.next.next;
    }
    node = node.next;
  }
  return l
}