toConsole('system', '', '', 'Command Loaded: Catfacts');
commands.catfact = {
	toggle: true,
	command: 'catfact',
	description: "Returns a random cat fact",
	usage: prefix + "catfact",
	execute: function(command, message, data) {
		toConsole('bot', '', data.channel, "Cat Fact: " + catfacts[Math.floor(Math.random() * catfacts.length)]);
	}
}
