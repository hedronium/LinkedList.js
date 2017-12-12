var Node = require('./Node');

var List = function (head, tail) {
	if (typeof head !== typeof tail) {
		throw 'Head and Tail are not of the same type.';
	}

	this._count = 0;
	this._head = head || null;
	this._tail = tail || null;

	if (!(head instanceof Node || this._head === null)) {
		throw 'Head is neither a Node nor Null';
	}

	if (this._head !== null) {
		var i = 0;
		this.each(function () {
			i++;
		});

		this._count = i;
	}
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

List.prototype.removeNode = function (node) {
  if (node === this._head) {
    this.shift();
  } else if (node === this._tail) {
    this.pop();
  } else {
    const prev = node.previous();
    const next = node.next();
    prev.setNext(next);
    next.setPrevious(prev);
    this._count--;
  }
};

List.prototype.truncateTo = function (length) {
	this._count = length;

	if (length === 0) {
		this._head = null;
		this._tail = null;

		return;
	}

	var node = this.get(length-1);
	this._tail = node;
};

List.prototype.empty = function () {
	this.truncateTo(0);
};

List.prototype.isEmpty = function () {
	return this._head === null;
};

List.prototype.each = function (callback, context) {
	var node = this._head;

	if (node === null) {
		return;
	}

	var i = 0;
	var till = this._tail.next();

	do {
		if(callback.call(context, i, node) === false) {
			return;
		}

		node = node.next();
		i++;
	} while (node !== till);
};

List.prototype.asArray = function () {
	var arr = [];

	this.each(function (index, node) {
		arr.push(node.value());
	});

	return arr;
};

List.prototype.find = function (value, context) {
	var comparator = value instanceof Function ? value : (function (node) {
		return node.value() === value;
	});

	var finding = null;

	this.each(function (index, node) {
		if (comparator.call(context, node, index)) {
			finding = node;
			return false;
		}
	});

	return finding;
};

List.prototype.get = function (index) {
	if (index < 0 || (index+1) > this._count) {
		return null;
	}

	var node = this._head;

	for (var i = 0; i < index; i++) {
		node = node.next();
	}

	return node;
};

List.prototype.reduce = function (callback, context, initial) {
	var x = initial || 0;

	this.each(function (index, node) {
		x = callback.call(context, x, node, index, this);
	});

	return x;
};

module.exports = List;