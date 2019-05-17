toConsole('system', '', '', 'Command Loaded: Lmgtfy');
commands.lmgtfy = {
	toggle: true,
	command: 'lmgtfy',
	description: "Helps get idiots on the right track",
	usage: prefix + "example <search term>",
	execute: function(command, message, data) {
		if (message) {
			toConsole('bot','',data.channel,"https://lmgtfy.com/?q="+encodeURIComponent(message))
		}
	}
}
