function Queue() {
  this.queueSize = 0;
  this.currentQueue = [];
  this.head = 0;
}

Queue.prototype.enqueue = function(element) {
  this.currentQueue[this.queueSize] = element;
  this.queueSize += 1;
};

Queue.prototype.dequeue = function() {

  if (this.queueSize === this.head) {
    return undefined;
  }

  else {
    var result = this.currentQueue[this.head];
    this.head += 1;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.queueSize - this.head;
};

