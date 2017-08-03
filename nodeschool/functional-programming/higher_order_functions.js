function repeat(operation, num) {
	while (num > 0) {
	  return repeat(operation, --num)
	}
}


module.exports = repeat
