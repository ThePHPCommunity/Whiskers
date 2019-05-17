toConsole('system', '', '', 'Command Loaded: Reload');
commands.reload = {
	toggle: true,
	command: 'reload',
	description: "Reloads all commands",
	usage: prefix + "reload",
	execute: function(command, message, data) {
		if (users[data.user].admin){
			toConsole('system', '', '', 'Collecting current command toggles');
			var toggles = {}
			for (var x in commands){
				if (commands[x].toggle !== undefined){
					toggles[commands[x].command] = commands[x].toggle
				}
			}
			commands = {};
			toConsole('system', '', '', 'Reloading all commands');
			loadCommands(toggles);
			toConsole('system', '', '', 'Commands reloaded');
			toConsole('bot', '', data.channel, "All commands have been reloaded.");
		} else {
			toConsole('bot','',data.channel,'Sorry, This command is for admins only.');
		}
	}
}
