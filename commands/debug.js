toConsole('system', '', '', 'Command Loaded: Debug');
commands.debug = {
	toggle: true,
	command: 'debug',
	description: "Returns the debug information for the command",
	usage: prefix + "debug",
	execute: function(command, message, data) {
		toConsole('bot', '', data.channel, "```"+JSON.stringify(data,null,2)+"```");
	}
}

toConsole('system', '', '', 'Command Loaded: Whoami');
commands.whoami = {
	toggle: true,
	command: 'whoami',
	description: "Loads what the bot knows about the user.",
	usage: prefix + "whoami",
	execute: function(command, message, data) {
		toConsole('bot', '', data.channel, "```"+JSON.stringify(users[data.user],null,2)+"```");
		console.log(this);
	}
}
