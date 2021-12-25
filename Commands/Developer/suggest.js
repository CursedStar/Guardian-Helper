const { CommandInteraction, MessageEmbed, Client} = require('discord.js');

module.exports = {
    name: 'suggest',
    description: 'suggets things for bot',
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const channel = interaction.guild.channels.cache.get('914552680339349514')

        const Embed = new MessageEmbed()
        .setTitle('Suggestion Submission')
        .setDescription(`Hey in order to submit your suggestion simply type it below and it will be send automatically on <#914552680339349514> `)
        .setColor('GREEN')
        .setFooter('🛡️ Guardian Support')
        .setTimestamp()

        interaction.reply({content: 'Done now check dms to continue', ephemeral: true})

        interaction.user.send({embeds: [Embed]})
    }
}