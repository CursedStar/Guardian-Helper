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

        const row1 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('1️⃣')
            .setCustomId('1'),
            
            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('2️⃣')
            .setCustomId('2'),

            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('3️⃣')
            .setCustomId('3'),

            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('4️⃣')
            .setCustomId('4'),

            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('5️⃣')
            .setCustomId('5'),
        )

        const row2 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('6️⃣')
            .setCustomId('6'),

            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('7️⃣')
            .setCustomId('7'),

            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('8️⃣')
            .setCustomId('8'),

            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('9️⃣')
            .setCustomId('9'),

            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('🤚')
            .setCustomId('10'),
        )

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

        interaction.channel.send({embeds: [desk], components: [row1, row2]})
        
    }
}