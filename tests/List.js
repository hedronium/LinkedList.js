var expect = require("chai").expect;
var List = require('../src/List');
var Node = require('../src/Node');

describe('List class', function () {
	describe('isEmpty method', function () {
		it('Returns `true` if list is empty', function () {
			var list = new List();
			expect(list.isEmpty()).to.be.true;
		});

		it('Returns `false` if list is not empty', function () {
			var list = new List();
			list.push('TEST');

			expect(list.isEmpty()).to.be.false;
		});
	});

	describe('push method', function () {
		it('Pushes a new Node onto the end', function () {
			var list = new List();

			list.push('TEST1');
			expect(list.isEmpty()).to.be.false;
			expect(list.count()).to.be.equal(1);
			expect(list.head().value()).to.be.equal('TEST1');
			expect(list.tail().value()).to.be.equal('TEST1');

			list.push('TEST2');
			expect(list.count()).to.be.equal(2);
			expect(list.tail().value()).to.be.equal('TEST2');
		});
	});

	describe('pop method', function () {
		it('Removes and Returns a Node off the end', function () {
			var list = new List();
			list.push('TEST1');
			list.push('TEST2');
			list.push('TEST3');

			expect(list.pop().value()).to.be.equal('TEST3');
			expect(list.count()).to.be.equal(2);

			expect(list.pop().value()).to.be.equal('TEST2');
			expect(list.count()).to.be.equal(1);

			expect(list.pop().value()).to.be.equal('TEST1');
			expect(list.count()).to.be.equal(0);

			expect(list.head()).to.be.null;
			expect(list.tail()).to.be.null;
		});
	});

	describe('unshift method', function () {
		it('Adds a Node to the start of the List', function () {
			var list = new List();

			list.unshift('2nd');
			expect(list.head()).to.be.an.instanceOf(Node);
			expect(list.tail()).to.be.an.instanceOf(Node);

			expect(list.head().value()).to.be.an.equal('2nd');
			expect(list.tail().value()).to.be.an.equal('2nd');
			expect(list.get(0).value()).to.be.an.equal('2nd');

			expect(list.count()).to.be.an.equal(1);

			list.unshift('1st');
			expect(list.head()).to.be.an.instanceOf(Node);
			expect(list.head().value()).to.be.an.equal('1st');
			expect(list.get(0).value()).to.be.an.equal('1st');

			expect(list.count()).to.be.an.equal(2);
		});
	});

	describe('shift method', function () {
		it('Removes and Returns a Node off of the start', function () {
			var list = new List();
			list.push('TEST1');
			list.push('TEST2');
			list.push('TEST3');

			expect(list.shift().value()).to.be.equal('TEST1');
			expect(list.count()).to.be.equal(2);

			expect(list.shift().value()).to.be.equal('TEST2');
			expect(list.count()).to.be.equal(1);

			expect(list.shift().value()).to.be.equal('TEST3');
			expect(list.count()).to.be.equal(0);

			expect(list.head()).to.be.null;
			expect(list.tail()).to.be.null;
		});
	});

	describe('head method', function () {
		it('Returns Null when list is empty', function () {
			var list = new List();

			expect(list.head()).to.be.null;
		});

		it('Returns a Node Object when list has atleast one Item', function () {
			var list = new List();
			list.push('TEST1');

			expect(list.head()).to.be.an.instanceOf(Node);
			expect(list.head().value()).to.be.equal('TEST1');
		});

		it('Returns the first Node in the list', function () {
			var list = new List();
			list.push('TEST1');
			list.push('TEST2');

			expect(list.head().value()).to.be.equal('TEST1');
		});
	});

	describe('tail method', function () {
		it('Returns Null when list is empty', function () {
			var list = new List();

			expect(list.tail()).to.be.null;
		});

		it('Returns a Node Object when list has atleast one Item', function () {
			var list = new List();
			list.push('TEST1');

			expect(list.tail()).to.be.an.instanceOf(Node);
			expect(list.tail().value()).to.be.equal('TEST1');
		});

		it('Returns the last Node in the list', function () {
			var list = new List();
			list.push('TEST1');
			list.push('TEST2');

			expect(list.tail().value()).to.be.equal('TEST2');
		});
	});

	describe('count method', function () {
		it('Returns the number of items in the list', function () {
			var list = new List();

			expect(list.count()).to.be.equal(0);

			list.push('TEST1');
			expect(list.count()).to.be.equal(1);

			list.push('TEST2');
			expect(list.count()).to.be.equal(2);
		});
	});

	describe('get method', function () {
		it('Returns the Node at the specified offset', function () {
			var list = new List();
			list.push('TEST1');
			list.push('TEST2');
			list.push('TEST3');

			expect(list.get(0).value()).to.be.equal('TEST1');
			expect(list.get(1).value()).to.be.equal('TEST2');
			expect(list.get(2).value()).to.be.equal('TEST3');
		});
	});

	describe('set method', function () {
		it('Sets the value of the node at the specified index', function () {
			var list = new List();
			list.push('TEST1');
			list.push('TEST2');
			list.push('TEST3');

			list.set(0, 'T1');
			list.set(1, 'T2');
			list.set(2, 'T3');

			expect(list.get(0).value()).to.be.equal('T1');
			expect(list.get(1).value()).to.be.equal('T2');
			expect(list.get(2).value()).to.be.equal('T3');
		});
	});

	describe('asArray method', function () {
		it('Returns the whole list as an Array', function () {
			var list = new List();

			expect(list.asArray().length).to.be.equal(0);

			list.push('TEST1');
			expect(list.asArray().length).to.be.equal(1);

			list.push('TEST2');
			expect(list.asArray().length).to.be.equal(2);

			list.push('TEST3');
			expect(list.asArray().length).to.be.equal(3);

			var arr = list.asArray();
			expect(arr[0]).to.be.equal('TEST1');
			expect(arr[1]).to.be.equal('TEST2');
			expect(arr[2]).to.be.equal('TEST3');
		});
	});

	describe('truncateTo method', function () {
		it('truncates the list to the specified length', function () {
			var list = new List();
			list.truncateTo(0);

			list.push('TEST1');
			list.push('TEST2');
			list.push('TEST3');
			list.truncateTo(2);

			expect(list.count()).to.be.equal(2);
			expect(list.tail().value()).to.be.equal('TEST2');
			expect(list.head().value()).to.be.equal('TEST1');

			list.truncateTo(1);
			expect(list.count()).to.be.equal(1);
			expect(list.tail().value()).to.be.equal('TEST1');
			expect(list.head().value()).to.be.equal('TEST1');

			list.truncateTo(0);
			expect(list.count()).to.be.equal(0);
			expect(list.tail()).to.be.null;
			expect(list.head()).to.be.null;
		});
	});

	describe('empty method', function () {
		it('empties the list', function () {
			var list = new List();

			list.push('TEST1');
			list.push('TEST2');
			list.push('TEST3');

			list.empty();
			expect(list.count()).to.be.equal(0);
			expect(list.head()).to.be.null;
			expect(list.tail()).to.be.null;
		});
	});
});