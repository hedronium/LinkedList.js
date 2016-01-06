var Node = function (value, previous, next) {
	this._value = value;
	
	this._previous = previous;
	this._next = next;
};

Node.prototype.value = function () {
	return this._value;
};

Node.prototype.previous = function () {
	return this._previous;
};

Node.prototype.next = function () {
	return this._next;
};

Node.prototype.set = function (value) {
	this._value = value;
};

Node.prototype.setPrevious = function (node) {
	this._previous = node;
};

Node.prototype.setNext = function (node) {
	this._next = node;
};

Node.prototype.isHead = function () {
	return this._previous === null;
};

Node.prototype.isTail = function () {
	return this._next === null;
};

module.exports = Node;