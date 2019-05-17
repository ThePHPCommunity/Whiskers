toConsole('system', '', '', 'Command Loaded: Say');
commands.say = {
	toggle: true,
	command: 'say',
	description: "Parrot Mode",
	usage: prefix + "say <message>",
	execute: function(command, message, data) {
		toConsole('bot', '', data.channel, message);
	}
}