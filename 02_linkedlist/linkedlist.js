function LinkedList() {
  this.head = null;
  this.tail = null;

}

LinkedList.prototype.addToTail = function(element) {

  if (this.tail === null) {
    this.tail = new Node(element);
    this.head = this.tail;
  }
  else {
    var tempTail = this.tail;
    this.tail = new Node(element);
    this.tail.previous = tempTail;
    tempTail.next = this.tail;
  }

};

LinkedList.prototype.addToHead = function(element) {

  if (this.head === null) {
    this.head = new Node(element);
    this.tail = this.head;
  }
  else {
    var tempHead = this.head;
    this.head = new Node(element);
    this.head.next = tempHead;
    tempHead.previous = this.head;
    this.head.previous = null;
  }

}

LinkedList.prototype.removeHead = function() {

  if (this.head === null) {
    return null
  }

  if (this.head.next !== null) {
    var tempHead = this.head;
    this.head = tempHead.next;
    this.head.previous = null;
    return tempHead.value;
  }
  else {
    var tempHead = this.head;
    this.head = null;
    this.tail = null;
    return tempHead.value;
  }

};

LinkedList.prototype.removeTail = function() {

  if (this.tail === null) {
    return null;
  }

  if (this.tail.previous !== null) {
    var tempTail = this.tail;
    this.tail = tempTail.previous;
    this.tail.next = null;
    return tempTail.value;
  }
  else {
    var tempTail = this.tail;
    this.tail = null;
    this.head = null;
    return tempTail.value;
  }

};

LinkedList.prototype.search = function(target, targetNode) {

  if (!targetNode) {
    targetNode = this.head;
  }


    if (typeof target !== 'function' && targetNode.value === target) {
      return targetNode.value;
    }
    else if (typeof target === 'function' && target(targetNode.value)){
      return targetNode.value;
    }
    else if (targetNode.next === null) {
        return null;
      }
      else {
        return this.search(target, targetNode.next);
      }
};

function Node(element) {
  this.value = element;
  this.next = null;
  this.previous = null;
}

