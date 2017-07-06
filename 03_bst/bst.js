function BinarySearchTree(value) {
  this.treeSize = 1;
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  this.treeSize += 1;

   if (this.value > value) {
    // to the left
    if (this.left) {
      this.left.insert(value);
    }
    else {
      this.left = new BinarySearchTree(value);
    }

  }
  else {
    // to the right
    if (this.right) {
      this.right.insert(value);
    }
    else {
      this.right = new BinarySearchTree(value);
    }
  }
}


BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstForEach = function() {

};

BinarySearchTree.prototype.breadthFirstForEach = function() {

};

BinarySearchTree.prototype.size = function() {
  return this.treeSize;
};
