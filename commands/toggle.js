toConsole('system', '', '', 'Command Loaded: Toggle');
commands.enable = {
	toggle: true,
	command: 'enable',
	description: "Enables commands (Slack Admins Only)",
	usage: prefix + "enable <command>",
	execute: function(command, message, data) {
		if (users[data.user].admin){
			if (commands[message.toLowerCase()]){
				if (message.toLowerCase() == "enable" || message.toLowerCase()== "disable") {
					toConsole('bot','',data.channel,message.toLowerCase()+' can\'t be toggled');
				} else {
					commands[message.toLowerCase()].toggle = true;
					toConsole('bot','',data.channel, '*'+message.toLowerCase()+'* has been enabled');
				}
			} else {
				toConsole('bot','',data.channel,'That command doesn\'t exist');
			}
		} else {
			toConsole('bot','',data.channel,'Sorry, This command is for admins only.');
		}
	}
}

commands.disable = {
	toggle: true,
	command: 'disable',
	description: "Disables commands (Slack Admins Only)",
	usage: prefix + "disable <command>",
	execute: function(command, message, data) {
		if (users[data.user].admin){
			if (commands[message.toLowerCase()]){
				if (message.toLowerCase() == "enable" || message.toLowerCase()== "disable") {
					toConsole('bot','',data.channel,message.toLowerCase()+' can\'t be toggled');
				} else {
					commands[message.toLowerCase()].toggle = false;
					toConsole('bot','',data.channel, '*'+message.toLowerCase()+'* has been disabled');
				}
			} else {
				toConsole('bot','',data.channel,'That command doesn\'t exist');
			}
		} else {
			toConsole('bot','',data.channel,'Sorry, This command is for admins only.');
		}
	}
}
