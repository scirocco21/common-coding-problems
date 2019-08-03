// Instructions: weave together two queues into a third one and return it. The two input queues may be of different lengths.

// =======
// SETUP
// ======
const Queue = require('./implementQueue');
// create two queues
const queue1 = new Queue();
const queue2 = new Queue();
// add some dummy values
queue1.add(1);
queue1.add(3);
queue2.add(2);
// =========
// MAIN FUNCTION
// =========
const weave = (q1,q2) => {
  const resultQueue = new Queue();
  // as long as the two queues are not empty, push items from queue into store
  while (!(q1.isEmpty() && q2.isEmpty())) {
    if (!q1.isEmpty()) {
      resultQueue.add(q1.remove());
    }
    if (!q2.isEmpty()) {
      resultQueue.add(q2.remove());
    }
  }
  return resultQueue;
}
// expect weave(queue1, queue2) to return [1,2,3]