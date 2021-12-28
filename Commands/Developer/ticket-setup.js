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
            "__**Open a ticket in order:**__\n" +


            "> To Report a user\n" +

            "> To reddem Premium"

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