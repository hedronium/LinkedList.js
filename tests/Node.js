var expect = require("chai").expect;
var Node = require('../src/Node');

describe('Node class', function () {
	describe('Constructor', function () {
		it('Sets the defaults of the object', function () {
			var node = new Node();
			expect(node.value()).to.be.null;
			expect(node.next()).to.be.null;
			expect(node.previous()).to.be.null;

			var previous_node = new Node();
			var next_node = new Node();

			// just the value
			expect((new Node('TEST1')).value()).to.be.equal('TEST1');

			// just the previous pointer
			expect((new Node(null, previous_node)).previous()).to.be.equal(previous_node);

			// just the next pointer
			expect((new Node(null, null, next_node)).next()).to.be.equal(next_node);
		});
	});

	describe('set method', function () {
		it('Sets the value of the Node', function () {
			var node = new Node('TEST1');
			node.set('TEST2');
			expect(node.value()).to.be.equal('TEST2');
		});
	});

	describe('setNext method', function () {
		it('Sets the next pointer to the node specified', function () {
			var node = new Node();
			var next_node = new Node();
			node.setNext(next_node);

			expect(node.next()).to.be.equal(next_node);
		});
	});

	describe('setPrevious method', function () {
		it('Sets the previous pointer to the node specified', function () {
			var node = new Node();
			var previous_node = new Node();
			node.setPrevious(previous_node);

			expect(node.previous()).to.be.equal(previous_node);
		});
	});

	describe('isTail method', function () {
		it('Returns true if the next pointer is null', function () {
			var node = new Node();
			expect(node.isTail()).to.be.true;
		});

		it('Returns false if the next pointer is not null', function () {
			var node = new Node(null, null, new Node());
			expect(node.isTail()).to.be.false;
		});
	});

	describe('isHead method', function () {
		it('Returns true if the previous pointer is null', function () {
			var node = new Node();
			expect(node.isHead()).to.be.true;
		});

		it('Returns false if the previous pointer is not null', function () {
			var node = new Node(null, new Node());
			expect(node.isHead()).to.be.false;
		});
	});
});