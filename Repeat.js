function repeat(operation, num) {

	if (num <= 0) return
	operation()
	if (num % 2) {
		setTimeout(function() { 
			operation();
			return repeat(operation, --num); 
		});	
	} else {
		return repeat(operation, --num);
	}
}

module.exports = repeat

