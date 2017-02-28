function countWords(inputWords) {
	return inputWords.reduce(function (acc, val) {
		console.log(acc);
		acc[val] = ++acc[val] || 1;
		//if (acc[val]) {
			//acc[val]++;
		//} else {
			//acc[val] = 1;
		//}
		return acc
	}, {});
}

module.exports = countWords;
