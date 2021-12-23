const { CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton, MessageReaction} = require('discord.js');

module.exports = {
    name: 'helpdesk',
    description: 'idek',
    permission: 'ADMINISTRATOR',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const desk = new MessageEmbed()
        .setTitle('Help Desk')
        .setDescription(`:one: **Question**\n
        :two: **Question** \n
        :three:  **Question** \n
        :four: **Question** \n
        :five: **Question** \n
        :six: **Question** \n
        :seven: **Question**\n
        :eight: **Question** \n
        :nine: **Question** \n
        🤚 **My question was not answered**`)
        .setFooter('Click 🤚 to get support')
        .setColor('DARK_BLUE')

        interaction.reply({content: 'Done', ephemeral: true})

        interaction.channel.send({embeds: [desk]})
        
    }
}