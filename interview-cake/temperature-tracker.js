// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor() {
    this.maxTemp = 0;
    this.minTemp = 110;
    this.totalValues = 0;
    this.count = 0;
    this.frequencyHash = {};
    this.maxOccurrences = 0;
    this.mode = 0;
  }
  insert(temperature) {
    // keep track of maxTemp
    if (temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    // keep track of minTemp
    if (temperature < this.minTemp) {
      this.minTemp = temperature;
    }
    // keep track of how many temperatures there are and what they add up to
    this.totalValues += temperature;
    this.count++;
    // make a hash table with frequencies
    if (this.frequencyHash[temperature]) {
      this.frequencyHash[temperature]++;
    } else {
      this.frequencyHash[temperature] = 1;
    }
    // keep track of the highest frequency and 
    if (this.frequencyHash[temperature] > this.maxOccurrences) {
      this.mode = temperature;
      this.maxOccurrences = this.frequencyHash[temperature];
    }
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMean() {
    let mean = this.totalValues/this.count
    if (this.totalValues/this.count) {
      return mean;
    }
    return 0;
  }

  getMode() {
    return this.mode
  }
}

// Testing 
const t = new TempTracker();
t.insert(50);
t.insert(80);
t.insert(80);
t.insert(30)
console.log(t.getMode()) // => expect 80