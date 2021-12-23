const { Client, MessageEmbed } = require('discord.js');
const { connection } = require('mongoose');
require('../../Events/Client/ready');

module.exports = {
    name: 'status',
    description: 'check bot status',
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
   async execute(interaction, client) {
         const response = new MessageEmbed()
         .setColor('AQUA')
         .setDescription(`**Client**:\<a:green_Circle:919533875049414656> Online \`${client.ws.ping}ms\`\n **Uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R> \n
         **Database** \`${switchTo(connection.readyState)}\``)

         interaction.reply({embeds: [response]})
   }
}

function switchTo(val)  {
    var status = " ";
    switch(val) {
        case 0 : status = `🔴 Disconnected`
        break;
        case 1 : status = `🟢 Connected`
        break;
        case 2 : status = `🟠 Connecting`
        break;
        case 3 : status = `🔵 Disconnecting`
        break;
    }
    return status;
}
  