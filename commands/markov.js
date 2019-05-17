toConsole('system', '', '', 'Command Loaded: Markov');
commands.markov = {
	toggle: true,
	command: 'markov',
	description: "Used to get a markov response from the bot",
	usage: prefix + "markov",
	execute: function(command, message, data) {
		toConsole('bot', '', data.channel, markov.respond(message));
	}
}

commands.msize = {
	toggle: true,
	command: 'msize',
	description: "Tells you the size of the markov file currently",
	usage: prefix + "msize",
	execute: function(command, message, data) {
		toConsole('bot', '', data.channel, "```Current Markov Brain\n  File Size: " + cmd_exec("ls -lh markov.txt | awk '{print $5}'").toString().trim() + "\n  Total Lines: " + cmd_exec("cat markov.txt | wc -l").toString().trim() + "\n  Total Words: " + cmd_exec("cat markov.txt | wc -w").toString().trim() + "\n  Unique Words " + cmd_exec("cat markov.txt | tr -s ' ' '\n' | sort | uniq -c | wc -l").toString().trim() + "```");
	}
}