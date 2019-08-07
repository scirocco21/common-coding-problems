function midPoint(list) {
  let node = list.head
  if (!node) {
    return null;
  }
  let slow = node;
  let fast = node;

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}