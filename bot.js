var SlackBot = require('slackbots');
var fs = require('fs');
var c = require('ansi-colors');
var cmd_exec = require('child_process').execSync;
var cron = require('cron').CronJob;
var Markov = require('markov-respond');

var config = JSON.parse(fs.readFileSync('config.json'));

eval(fs.readFileSync('arrays.js') + ''); // Include the arrays into the main file
eval(fs.readFileSync('functions.js') + ''); // Include the functions into the main file

// Setup Bot Instance
var bot = new SlackBot({
	token: config.token,
	name: config.name
});

const factors = number => Array
	.from(Array(number + 1), (_, i) => i)
	.filter(i => number % i === 0)

var prefix = "!";
var cc = 0;

var params = {
	icon_emoji: ':cat:'
};

var channels = {};
var users = {};
var commands = {};
var markovCache = [];

var markov = new Markov();

new cron('*/5 * * * *', function() {
	flushMarkovCache();
}, null, true, '');

bot.on('start', function() {
	toConsole('system', '', '', 'Bot is now starting up.');

	toConsole('system', '', '', 'Generating Channel List.');
	var c = bot.getChannels()._value.channels;
	for (var x = 0; x < c.length; x++) {
		if (c[x].is_channel) {
			channels[c[x].id] = c[x].name;
		}
	}

	toConsole('system', '', '', 'Generating User List.');
	var u = bot.getUsers()._value.members;
	for (var x = 0; x < u.length; x++) {
		users[u[x].id] = {
			id: u[x].id,
			username: u[x].name,
			realname: u[x].real_name,
			admin: u[x].is_admin,
			owner: u[x].is_owner,
			bot: u[x].is_bot
		}
	}

	toConsole('system', '', '', 'Loading in all commands.');
	loadCommands();

	toConsole('system', '', '', 'Training Markov from past messages');
	fs.readFile('markov.txt', function(err, data) {
		if (!err) {
			strings = data.toString().split('\n')
			for (var m in strings) {
				markov.train(strings[m]);
			}
			toConsole('system', '', '', 'Finished training Markov with ' + strings.length + ' strings');
		}
	})
});

bot.on('message', function(data) {
	if (data.type == "message" && data.subtype != "bot_message" && data.text != undefined) {
		toConsole('message', data.user, data.channel, data.text);
		var command = data.text.split(" ")[0];
		var message = data.text.substr(data.text.indexOf(" ") + 1);

		if (command.indexOf(prefix) == 0 && !users[data.user].bot) {
			// Command has been asked for. Try and work out which one it is.
			command = command.replace(prefix, ''); // Remove the prefix from the command name.
			if (commands[command]) {
				if (commands[command].toggle) {
					commands[command].execute(command, message, data);
				}
			} else if (command == "killmenow" && config.owners.indexOf(data.user) > -1) {
				// Hidden killswitch command.
				process.kill(process.pid);
			}
		} else {
			// If it's not a command, try training the markov stuff
			markov.train(message);
			markovCache.push(message);
		}
	}
})