module.exports = function(array, start, end) {
	console.log(array, start, end);

	console.log(Function.prototype.call(Array.prototype.slice, [['1',2], 1]));
    return Function.prototype.call(Array.prototype.slice, [array, start, end]);
}
