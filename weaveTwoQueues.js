// Instructions: weave together two queues into a third one and return it. The two input queues may be of different lengths.
const Queue = require('./implementQueue');
// create two queues
const queue1 = new Queue();
const queue2 = new Queue();
// set up empty data store
const newData = [];
// add some dummy values
queue1.add(1);
queue1.add(3);
queue2.add(2);
// as long as the two queues are not empty, push items from queue into store
while (!(queue2.isEmpty() && queue1.isEmpty())) {
  if (queue1.peek()) {
    newData.push(queue1.remove());
  }
  if (queue2.peek()) {
    newData.push(queue2.remove());
  }
}
// expect newData to contain [1,2,3]