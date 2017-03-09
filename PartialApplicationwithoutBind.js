var slice = Array.prototype.slice;
function logit(namespace) {
	
	return function () { 
		return console.log.apply(this, [namespace, slice.call(arguments).join(' ')]); };
}
module.exports = logit;

