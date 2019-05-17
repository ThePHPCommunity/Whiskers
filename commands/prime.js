toConsole('system', '', '', 'Command Loaded: Prime');
commands.prime = {
	toggle: true,
	command: 'prime',
	description: "Checks if a number is prime",
	usage: prefix + "prime",
	execute: function(command, message, data) {
		if (message.toLowerCase() == "optimus") {
			msg = "In any war, there are calms between storms. There will be days when we lose faith. Days when our allies turn against us...but the day will never come that we forsake this planet and its people. - Optimus Prime";
		} else {
			message = parseInt(message, 0);
			if (Number.isInteger(message)) {
				if (message < 1000000 || message > 0) {
					if (message < 3) {
						msg = message + " is not a prime number.";
					} else {
						var a = factors(message);
						if (a.length > 2) {
							msg = message + " is not a prime number.";
						} else {
							msg = message + " is a prime number.";
						}
					}
				} else {
					msg = "The number must be between 1 and 1,000,000";
				}
			} else {
				msg = "That doesn't seem to be a valid number";
			}
		}
		if (msg) {
			toConsole('bot', '', data.channel, msg);
		}
	}
}
