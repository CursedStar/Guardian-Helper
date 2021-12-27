const { BaseMessageComponent, MessageActionRow, MessageEmbed, MessageButton , CommandInteraction} = require('discord.js');
const client = require('../../Structures/index');
const { staff } = require('../../Structures/config.json');

module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        if(interaction.customId === 'tic') {

        }
    }
}