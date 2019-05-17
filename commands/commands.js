toConsole('system', '', '', 'Command Loaded: Commands');
commands.commands = {
	toggle: true,
	command: 'commands',
	usage: prefix + "commands",
	description: "Lists all of the commands",
	execute: function(command, message, data) {
		msg = "```";
		l = 0;
		for (var cmd in commands) {
			// Determine the length of the longest command named
			if (commands[cmd].command.length > l){
				l = commands[cmd].command.length;
			}
		}
		for (var cmd in commands) {
			var tog = "";
			if (!commands[cmd].toggle){
				tog = " [Disabled]";
			}
			var commandName = commands[cmd].command;
			for (var x = 0; x < (l - commands[cmd].command.length); x++){
				commandName += " ";
			}
			msg += commandName + " | " + commands[cmd].description + tog + "\n";
		}
		msg += "```";
		toConsole('bot', '', data.channel, msg);
	}
}
