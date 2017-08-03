function getShortMessages(messages) {
	return messages.map(function(item) { return item.message; }).filter(function(word){ return word.length < 50 })   
}

module.exports = getShortMessages
