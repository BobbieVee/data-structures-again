that = this;
function HashTable(){
	 this.numBuckets = 35;
	 this.table = [];
}

HashTable.prototype.set = function(key, val){
	if (typeof key !== 'string'){
		throw new TypeError("Keys must be strings");
	}
	if (!this.table[this.hash(key)]){
		this.table[this.hash(key)] =  new that.LinkedList;
	}
	this.table[this.hash(key)].addToHead({'key': key, 'value': val});
}; 

HashTable.prototype.get = function(key){
	if (this.table[this.hash(key)])
		return this.table[this.hash(key)].removeHead().value;

};

HashTable.prototype.hasKey = function(key){
		if (this.table[this.hash(key)].search(function(value){
			return value.key === key;
		})) {
			return true
		}
		return false;
};

HashTable.prototype.hash = function(str){
	return str.split('').reduce(function(mem, char){
		return mem += char.charCodeAt()  
	},0) % this.numBuckets;
}