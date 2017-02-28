function repeat(func, num) {
	for (i = 0; i < num; i++) {
		func();
	}
}
module.exports = repeat;
