const { CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton, MessageReaction} = require('discord.js');

module.exports = {
    name: 'rules',
    description: 'check server rules',
    permission: 'ADMINISTRATOR',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const Row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('Invite Guardian')
            .setStyle('LINK')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=912773129183563776&permissions=1101525167126&scope=bot%20applications.commands')
        )


        const Rules = new MessageEmbed()
        .setTitle('Guardian Support Rules')
        .setDescription('Hello and welcome to this server. Below you will see some rules you should be following')
        .addFields({
            name: 'Rule 1',
            value: '<:arrow:923607628356157491> Please follow Discord Terms of Service (https://discord.com/terms) & Community Guidelines (https://discord.com/guidelines)',
            inline: false
        },
        {
            name: 'Rule 2',
            value: '<:arrow:923607628356157491>  You must talk about appropriate topics only.',
            inline: false
        }, {
            name: 'Rule 3',
            value: '<:arrow:923607628356157491> Nfsw content is not allowed here ',
            inline: false
        },{
            name: 'Rule 4',
            value: '<:arrow:923607628356157491>  Advertising is not allowed on chats or either on dms',
            inline: false
        }, {
            name: 'Rule 5',
            value: '<:arrow:923607628356157491>  No begging either for nitro or such things',
            inline: false
        },
        {
            name: 'Rule 6',
            value: '<:arrow:923607628356157491>  No Mini moding. Mods exist for a reason ',
            inline: false
        },
        {
            name: 'Rule 7',
            value: '<:arrow:923607628356157491>  Dont  create drama on chats dms exist for a reason  ',
            inline: false
        },
        {
            name: 'Rule 8',
            value: '<:arrow:923607628356157491>  Here you should speak only enlgish ',
            inline: false
        }, {
            name: 'Rule 9',
            value: '<:arrow:923607628356157491> Use your brain ~~if you have~~ before chatting ',
            inline: false
        })
        .setColor('BLUE')
        .setFooter('Violating any rules will result to warn')

        interaction.reply({content: 'Done', ephemeral: true})

        interaction.channel.send({embeds: [Rules], components: [Row]})
    }
}