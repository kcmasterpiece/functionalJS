var slice = Array.prototype.slice;
function curryN(fn, n, args) {
	if (n === undefined) { n = fn.length; }
	return function(arg){
		console.log(fn);
		if (n <=1) {
			return fn(arg);
		} 	
		return curryN(fn.bind(this, arg), n - 1 );
	};
}

module.exports = curryN;
