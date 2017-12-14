var expect = require("chai").expect;
var List = require('../src/List');
var Node = require('../src/Node');

describe('List class', function () {
	describe('Constructor Method', function () {
		it('Creates an empty list', function () {
			var a = new List();

			expect(a.head()).to.be.null;
			expect(a.tail()).to.be.null;
			expect(a.count()).to.be.equal(0);
		});

		it('Creates a new list from existing list', function () {
			var a = new List();
			a.push(1);
			a.push(2);

			var b = new List(a.head(), a.tail());
			expect(b.head()).to.be.equal(a.head());
			expect(b.tail()).to.be.equal(a.head().next());
			expect(b.count()).to.be.equal(a.count());
		});

		it('Throws an exception if head is neither null nor a Node', function () {
			expect(function () { new List('HUE', 'MAN'); }).to.throw('Head is neither a Node nor Null');
		});

		it('Throws an exception if head & tail aint the same type', function () {
			expect(function () { new List(new Node(), 'X'); }).to.throw('Head and Tail are not of the same type.');
		});
	});

	describe('reduce method', function () {
		it('Reduces the List intoa  single value', function () {
			var list = new List();
			list.push(1);
			list.push(2);
			list.push(3);

			expect(list.reduce(function (prev, node) {
				return prev + node.value();
			}, null, 0)).to.be.equal(6);
		});
	});

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

			expect(list.push('TEST1')).to.be.instanceOf(Node);
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

			expect(list.unshift('2nd')).to.be.instanceOf(Node);
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

	describe('remove method', function () {
		it('Removes a single node', function () {
      var list = new List();
      var node = list.push('TEST1');
			list.removeNode(node);

      expect(list.count()).to.be.equal(0);

      expect(list.head()).to.be.null;
      expect(list.tail()).to.be.null;
		});

		it('Shifts if node is the list\'s head', function () {
      var list = new List();
      var node = list.push('TEST1');
      var persistedNode = list.push('TEST2');

      list.removeNode(node);

      expect(list.count()).to.be.equal(1);
      expect(list.head()).to.be.equal(persistedNode);
      expect(list.tail()).to.be.equal(persistedNode);
		});

    it('Pops if node is the list\'s tail', function () {
      var list = new List();
      var persistedNode = list.push('TEST1');
      var node = list.push('TEST2');

      list.removeNode(node);

      expect(list.count()).to.be.equal(1);
      expect(list.head()).to.be.equal(persistedNode);
      expect(list.tail()).to.be.equal(persistedNode);
    });

    it('Removes a mid-list node', function () {
      var list = new List();
      var head = list.push('TEST1');
      var node = list.push('TEST2');
      var tail = list.push('TEST3');

      list.removeNode(node);

      expect(list.count()).to.be.equal(2);
      expect(list.head()).to.be.equal(head);
      expect(list.tail()).to.be.equal(tail);
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

		it('Returns null if the index is negative', function () {
			var list = new List();
			list.push('TEST1');

			expect(list.get(-1)).to.be.null;
		});

		it('Returns null if the a node at the specified index does not exist', function () {
			var list = new List();
			list.push('TEST1');

			expect(list.get(1)).to.be.null;
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

	describe('find method', function () {
		it('Performs a linear search on the List and returns the Node if found', function () {
			var list = new List();
			list.push('TEST1');
			var find = list.push('TEST2');
			list.push('TEST3');

			expect(list.find('TEST2')).to.be.equal(find);
		});

		it('Performs a linear search on the List and returns null if not found', function () {
			var list = new List();
			list.push('TEST1');
			list.push('TEST2');
			list.push('TEST3');

			expect(list.find('TEST4')).to.be.null;
		});

		it('Performs a linear search on the List with a comparator function', function () {
			var list = new List();
			list.push(1);
			list.push(2);
			list.push(3);

			expect(list.find(function (node) {
				return node.value()+1 === 3;
			}).value()).to.be.equal(2);
		});
	});

	describe('each method', function () {
		it('It helps traverse the list from head to tail in order', function () {
			var list = new List();
			list.push('TEST1');
			list.push('TEST2');
			list.push('TEST3');

			var i = 0;
			list.each(function (index, node) {
				switch (index) {
					case 0:
						expect(node.value()).to.be.equal('TEST1');
						break;
					case 1:
						expect(node.value()).to.be.equal('TEST2');
						break;
					case 2:
						expect(node.value()).to.be.equal('TEST3');
						break;
				}

				i++;
			});

			expect(i).to.be.equal(3);
		});
	});
});