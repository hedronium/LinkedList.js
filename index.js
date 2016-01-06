(function (module, define, window) {
	var ns = {
		List: require('./src/List'),
		Node: require('./src/Node')
	};

	if (typeof module !== 'undefined') {
		module.exports = ns;
	} else if (typeof define !== 'undefined') {
		define('LinkedListJS', function () {
			return ns;
		});
	} else if (typeof window !== 'undefined') {
		window.LinkedListJS = ns;
	}
})(module, define, window);