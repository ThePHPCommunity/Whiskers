toConsole('system', '', '', 'Command Loaded: Admin Command Pack');
commands.cmd = {
	toggle: true,
	command: 'cmd',
	description: "Executes Commands at the command line (Bot Owner Only)",
	usage: prefix + "cmd <command>",
	execute: function(command, message, data) {
		if (config.owners.indexOf(data.user) > -1) {
			toConsole('bot', '', data.channel, "```" + cmd_exec(message) + "```");
		}
	}
}