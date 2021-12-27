const {CommandInteraction, MessageEmbed, MessageButton, MessageActionRow} = require('discord.js');

module.exports = {
    name: 'ticket',
    description: 'just sends ticket',
    permission: 'ADMINISTRATOR',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const guild = interaction.guild;

        const embed = new MessageEmbed()
        .setTitle('Support Ticket')
        .setAuthor(interaction.guild.name, interaction.guild.iconURL({dynamic: true}))
        .setDescription(
            "__**How to make a ticket**__\n" +


            "> Click on the reaction that relates to your need\n" +

            "> Once the ticket is made you will be able to type in there"

        )
        .setColor('GREEN')

        const btn = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('tic')
            .setLabel('🎫 Create Ticket!')
            .setStyle('PRIMARY')
        )

        interaction.reply({content: 'Done', ephemeral: true})

        interaction.channel.send({embeds: [embed], components: [btn]})
    }
}