toConsole('system', '', '', 'Command Loaded: Example');
commands.example = {
	command: 'example',
	description: "Just an example command",
	usage: prefix + "example <example> [example]",
	execute: function(command, message, data) {
		toConsole('bot', '', data.channel, "You've executed the example command. Well Done!");
	}
}