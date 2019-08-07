// implement basic JS eventing system

class Event {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let event of this.events[eventName]) {
        event();
      }
    } else {
      return null;
    }
  }
  off(eventName) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }
}