var Node = require('./Node');

var List = function () {
	this._count = 0;
	this._head = null;
	this._tail = null;
};

LinkedList.prototype.head = function () {
	return this._head;
};

LinkedList.prototype.tail = function () {
	return this._tail;
};

LinkedList.prototype.count = function () {
	return this._count;
};

LinkedList.prototype.get = function (index) {
	var node = this._head;

	for (var i = 0; i < index; i++) {
		node = node.next();
	}

	return node;
};

LinkedList.prototype.set = function (index, value) {
	var node = this.get(index);
	node.setValue(value);
};

LinkedList.prototype.push = function (value) {
	var node = new Node(value, this._tail, null);

	this._tail.setNext(node);
	this._tail = node;

	this._count++;
};

LinkedList.prototype.pop = function () {
	var node = this._tail;

	var new_tail = this._tail.previous();
	new_tail.setNext(null);
	this._tail = new_tail;

	this._count--;

	return node;
};

LinkedList.prototype.unshift = function (value) {
	var node = new Node(value, null, this._head);

	this._head.setPrevious(node);
	this._head = node;

	this._count++;
};

LinkedList.prototype.shift = function () {
	var node = this._head;
	var new_head = this._head.next();
	new_head.setPrevious(null);
	this._head = new_head;

	this._count--;

	return node;
};

LinkedList.prototype.asArray = function () {
	var arr = [];
	var node = this._head;

	while (node) {
		arr.push(node);
		node = node.next();
	}

	return arr;
};

LinkedList.prototype.truncateTo = function (index) {
	this._count = index;
	this.get(index-1).setNext(null);
};

module.exports = List;