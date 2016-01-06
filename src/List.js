var Node = require('./Node');

var List = function () {
	this._count = 0;
	this._head = null;
	this._tail = null;
};

List.prototype.head = function () {
	return this._head;
};

List.prototype.tail = function () {
	return this._tail;
};

List.prototype.count = function () {
	return this._count;
};

List.prototype.get = function (index) {
	var node = this._head;

	for (var i = 0; i < index; i++) {
		node = node.next();
	}

	return node;
};

List.prototype.set = function (index, value) {
	var node = this.get(index);
	node.set(value);
};

List.prototype.push = function (value) {
	var node = new Node(value, this._tail, null);

	if (this._tail !== null) {
		this._tail.setNext(node);
	}

	if (this._head === null) {
		this._head = node;
	}

	this._tail = node;
	this._count++;

	return node;
};

List.prototype.pop = function () {
	var node = this._tail;

	var new_tail = null;
	if (this._tail.previous() !== null) {
		new_tail = this._tail.previous();
		new_tail.setNext(null);
	}
	
	this._tail = new_tail;

	this._count--;

	if (this._count === 0) {
		this._head = null;
	}

	return node;
};

List.prototype.unshift = function (value) {
	var node = new Node(value, null, this._head);

	if (this._head !== null) {
		this._head.setPrevious(node);
	}

	if (this._tail === null) {
		this._tail = node;
	}
	
	this._head = node;

	this._count++;

	return node;
};

List.prototype.shift = function () {
	var node = this._head;

	var new_head = null;
	if (this._head.next() !== null) {
		new_head = this._head.next();
		new_head.setPrevious(null);
	}

	this._head = new_head;

	this._count--;

	if (this._count === 0) {
		this._tail = null;
	}

	return node;
};

List.prototype.asArray = function () {
	var arr = [];
	var node = this._head;

	while (node) {
		arr.push(node.value());
		node = node.next();
	}

	return arr;
};

List.prototype.truncateTo = function (length) {
	this._count = length;

	if (length === 0) {
		this._head = null;
		this._tail = null;

		return;
	}

	var node = this.get(length-1);
	node.setNext(null);
	this._tail = node;
};

List.prototype.empty = function () {
	this.truncateTo(0);
};

List.prototype.isEmpty = function () {
	return this._head === null;
};

List.prototype.find = function (value) {
	var node = this._head;

	while (node !== null) {
		if (node.value() === value) {
			return node;
		}

		node = node.next();
	}

	return null;
};

module.exports = List;