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


BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) return true;
  if ( value < this.value){
    // if null return false
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    // if null return false
    if (!this.right){
      return false;
    } else {
      return this.right.contains(value);      
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function(func, orderType) {

  switch (orderType){

    case  'pre-order':
      func(this.value);
      if (this.left){
        this.left.depthFirstForEach(func, 'pre-order');
      }
      if (this.right){
        this.right.depthFirstForEach(func, 'pre-order'); 
      } 
      break;

    case  'post-order':
      if (this.left){
        this.left.depthFirstForEach(func, 'post-order');
      }
      if (this.right){
        this.right.depthFirstForEach(func, 'post-order'); 
      }
      func(this.value);       
      break;      

    default: 
      if (this.left){
          this.left.depthFirstForEach(func);
        }
      func(this.value);
      if (this.right){
        this.right.depthFirstForEach(func); 
      }    
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function(func, levelArray) {
  var nextLevelArray = [];
  if (!levelArray) levelArray = [this];

  levelArray.forEach(function(element){
    func(element.value);
    if (element.left) {
      nextLevelArray.push(element.left)
    }
    if (element.right) {
      nextLevelArray.push(element.right)
    }
  }); 
  
   if (nextLevelArray.length > 0) this.breadthFirstForEach(func, nextLevelArray);
};

BinarySearchTree.prototype.size = function() {
  return this.treeSize;
};
