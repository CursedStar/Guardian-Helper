const { Client } = require('discord.js');
const mongoose = require('mongoose');
const { Database } = require('../../Structures/config.json');

module.exports = {
    name: 'ready',
    once: true,
    /**
     * @param  {Client} client
     */
    execute(client) {
        console.log('This client is now ready')
        client.user.setActivity('tickets', {type: 'WATCHING'})

        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('client connected to database')
        }).catch((err) => {
            console.log(err)
        })
    }
}