function toConsole(message_type, user, channel, message) {
	var d = new Date();
	var date = ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear() + " @ " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
	if (channels[channel] != null) {
		var chan = '#' + channels[channel];
	} else {
		var chan = "private";
	}
	switch (message_type) {
		case 'system':
			console.log(c.cyan(date) + ' ' + c.green('[*]') + c.white(' ' + message));
			break;
		case 'message':
			console.log(c.cyan(date) + ' ' + c.green('[*]') + c.white(' ' + chan + ':<' + users[user].realname + ' (' + users[user].username + ')> ' + message));
			break;
		case 'bot':
			bot.postMessage(channel, message, params);
			console.log(c.cyan(date) + ' ' + c.green('[*]') + c.white(' ' + chan + ':<Bot> ' + message));
			break;
	}
}

function loadCommands(reload = false) {
	fs.readdirSync('commands/').forEach(function(file) {
		if (file.endsWith('.js') && !file.endsWith('.min.js')) {
			eval(fs.readFileSync('commands/' + file) + '');
		}
	})
}

function flushMarkovCache() {
	toConsole('system', '', '', 'Flushing Markov Cache to file');
	// Move cache to temp storage and then wipe the live one
	var markovFlushCache = markovCache;
	markovCache = [];

	for (var x in markovFlushCache) {
		fs.appendFileSync('markov.txt', markovFlushCache[x] + '\n');
	}
	toConsole('system', '', '', 'Flush Completed - ' + markovFlushCache.length + ' lines flushed');
	// Clean memory
	markovFlushCache = null;
}