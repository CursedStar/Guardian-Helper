const { CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton, MessageReaction, Collector} = require('discord.js');

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

        const row3 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('Invite Guardian')
            .setStyle('LINK')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=912773129183563776&permissions=1101525167126&scope=bot%20applications.commands')
        )


        const desk = new MessageEmbed()
        .setTitle('Help Desk')
        .setDescription(`:one: **How can i invite Guardian**\n
        :two: **How i do i report a user or a bug** \n
        :three:  **How do i set the logs on my server?** \n
        :four:  **What data the bot stores? Will my data be leakead?** \n
        :five: **How do i get Premium? How do i reedem the perks?** \n
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
