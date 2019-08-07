function fromLast(n, list) {
  if (!list.head) {
    return null;
  }
  let fast = list.head;
  let slow = list.head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next
  }
  return slow;
}