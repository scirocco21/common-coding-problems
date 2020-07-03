// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor() {
    this.maxTemp = 0;
    this.minTemp = 110;
    this.totalValues = 0;
    this.count = 0;
    this.highestFrequency = 0;
    this.frequencyHash = {};
    this.modes = [];
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
      this.frequencyHash[temperature] += 1
    } else {
      this.frequencyHash[temperature] = 1;
    }
    // keep track of the highest frequency
    if (this.frequencyHash[temperature] > this.highestFrequency) {
      this.highestFrequency = this.frequencyHash[temperature]
    }
    // keep updating the modes array every time a new temperature is inserted
    this.modes = []; // empty out the modes array every time insert() is called
    for (let temp in this.frequencyHash) {
      if (this.frequencyHash[temp] === this.highestFrequency) {
        this.modes.push(temp)
      }
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
    return parseInt(this.modes[0]);
  }
}