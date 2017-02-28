function getShortMessages(messages){
	var shortMessages = [];
	for (var i = 0; i < messages.length; i++) {
		if (messages[i].message.length < 50) {
			shortMessages.push(messages[i].message);
		}
	}
	return shortMessages;
}
module.exports = getShortMessages;
