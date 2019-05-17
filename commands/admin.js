toConsole('system', '', '', 'Command Loaded: Admin Command Pack');
commands.cmd = {
	toggle: true,
	command: 'cmd',
	description: "Executes Commands at the command line (Bot Owner Only)",
	usage: prefix + "cmd <command>",
	execute: function(command, message, data) {
		if (data.user == "UBS1QV78R"){
			toConsole('bot', '', data.channel, "```"+cmd_exec(message)+"```");
		}
	}
}
