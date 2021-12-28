const { Client, Collection } = require('discord.js');
const client = new Client({intents: 32767});
const { Token } = require('./Structures/config.json');


client.commands = new Collection();
require('./Structures/Handlers/Events')(client);
require('./Structures/Handlers/Commands')(client);

client.login(Token);