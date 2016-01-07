#LinkedList.js
A simple doubly linked list implementation in Javascript.

## Installation
```
npm install linkedlist-js
```

## Usage
require the module...

```javascript
var List = require('linkedlist-js').List;
```

instantiate a List object...
```javascript
var list = new List();

// PUSH!
list.push('HUEHUE');
```

### Traversing the List
#### with each(callback)
```javascript
list.each(function (index, node) {
    console.log(index + ': ' + node.value());
});
```

#### like a badass
```javascript
var node = list.head();

while (node != null) {
    console.log(node.value());
    node = node.next();
}
```


## `List` API
### Adding Nodes
#### push(value)
Creates a node with the value specified, adds it to the end of the list and returns the `Node` object.

```javascript
var a = list.push('A');
a.value(); //'A'
```

#### unshift(value)
Creates a node with the value specified, adds it to the beginning of the list and returns the `Node` object.

```javascript
var b = list.unshift('B');
b.value(); //'B'
```

### Accessing Nodes
#### pop
Returns the tail `Node` and removes it from the list.
```
var list = new List();
list.push('A');
list.push('B');

list.pop().value(); //'B'
```

#### shift
Returns the head `Node` and removes it from the list.
```
var list = new List();
list.push('A');
list.push('B');

list.shift().value(); //'A'
```

#### get(index)
Returns the `Node` at the specified index. _(Linear Lookup, not very performant)_
```javascript
var list = new List();
list.push('A');
list.push('B');
list.push('C');

list.get(1).value(); //'B'
```

### Peeking
#### head()
Returns the head `Node` or `null` in list is empty
```javascript
var list = new List();
var node_a = list.push('A');
var node_b = list.push('B');

list.head() === node_a; // true
```

#### tail()
Returns the tail `Node` or `null` in list is empty
```javascript
var list = new List();
var node_a = list.push('A');
var node_b = list.push('B');

list.tail() === node_b; // true
```

### Searching
#### find(value)
Find the node with the specified value and returns it. _(Linear search, not very performant)_
```javascript
var list = new List();
list.push('A');
var node_b = list.push('B');

list.find('B') === node_b; // true
```

### Misc
#### set(index, value)
Sets the value of the `Node` at the specifiec index.
```javascript
var list = new List();
list.push('A');

list.set(0, 'B');
list.head().value(); // 'B'
```

#### count()
Returns the number of `Node`s in the list.
```javascript
var list = new List();
list.push('A');
list.push('B');

list.count(); // 2
```

#### isEmpty()
Returns `true` if list has no `Node`s and `false` if otherwise.
```javascript
var list = new List();
list.isEmpty(); // true

list.push('A');
list.isEmpty(); // false
```

#### truncateTo(length)
Truncates the list to the specified size.
```
var list = new List();
list.push('A');
list.push('B');

list.truncateTo(1);
list.count(); // 1
```

#### empty()
Same as calling `truncateTo(0)`. Empties the list.
```
var list = new List();
list.push('A');
list.push('B');

list.empty();

list.count();   // 0
list.isEmpty(); // true
```


### asArray()
Returns the list as an Array.
```javascript
var list = new List();
list.push('A');
list.push('B');

list.asArray(); // ['A', 'B']
```


## `Node` API
### Getters
#### value()
Returns the value of the `Node`

#### previous()
Returns the previous `Node` in the list of `null` if the node is the forst `Node`.

#### next()
Returns the next `Node` in the list of `null` if the node is the last `Node`.

### Setters
#### set(value)
Sets the value of the node
```
var node = new Node();
node.set('A');

node.value(); // 'A'
```

#### setPrevious(`Node` node)
Sets the previous pointer of the `Node`
```
var node_a = new Node();
var node_b = new Node();
node_b.setPrevious(node_a);

node_b.previous() === node_a; // true
```

#### setNext(`Node` node)
Sets the next pointer of the `Node`
```
var node_a = new Node();
var node_b = new Node();
node_a.setNext(node_b);

node_a.next() === node_b; // true
```

### Misc
#### isHead()
Retunrs true if the node is the first node in the list.
```javascript
var list = new List();
list.push('A');
list.push('B');

list.head().isHead(); // true
```

#### isTail()
Retunrs true if the node is the last node in the list.
```javascript
var list = new List();
list.push('A');
list.push('B');

list.tail().isTail(); // true
```

## Running Tests
```
npm test
```

if you have mocha installed, you may also run
```
mocha tests
```