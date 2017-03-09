module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(acc, currentValue, currentIndex, array) {
		acc.push(fn(currentValue));
		return acc;
	},[]);
}
