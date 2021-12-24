const { CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton, MessageReaction, Collector} = require('discord.js');

module.exports = {
    name: 'reaction',
    description: 'set up reaction roles',
    permission: 'ADMINISTRATOR',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('updates')
            .setLabel('Updates')
            .setStyle('PRIMARY'),

            new MessageButton()
            .setCustomId('status')
            .setLabel('Status')
            .setStyle('PRIMARY'),

            new MessageButton()
            .setStyle('PRIMARY')
            .setCustomId('announcments')
            .setLabel('Announcments')
        )
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Reaction Roles')
        .setDescription('Use the buttons below to get some cool roles')

        interaction.reply({content: 'Done', ephemeral: true})

       const m = await interaction.channel.send({embeds: [embed], components: [row]})

       const iFilter = i => i.user.id === interaction.author.id;

       const collector = m.createMessageComponentCollector({filter: iFilter, time: 60000});

       collector.on('collect', async i => {
           if(i.customId === 'updates') {
               const role = interaction.guild.roles.cache.get('923975585963868170')
               if(i.member.roles.cache?.has('923975585963868170')) {
                   i.member.roles.remove('923975585963868170')
                   i.reply({content: `Removed ${role} from you`, ephemeral: true})
               } else {
                   i.member.roles.add('923975585963868170')
                   i.reply({content: `Added ${role} to you`})
               }
           } else if(i.customId === 'status') {
            const role = interaction.guild.roles.cache.get('923976797631176765')
            if(i.member.roles.cache?.has('923976797631176765')) {
                i.member.roles.remove('923976797631176765')
                i.reply({content: `Removed ${role} from you`, ephemeral: true})
            } else {
                i.member.roles.add('923976797631176765')
                i.reply({content: `Added ${role} to you`})
            }
           } else if(i.customId === 'announcments') {
            const role = interaction.guild.roles.cache.get('923976916963315723')
            if(i.member.roles.cache?.has('923976916963315723')) {
                i.member.roles.remove('923976916963315723')
                i.reply({content: `Removed ${role} from you`, ephemeral: true})
            } else {
                i.member.roles.add('923976916963315723')
                i.reply({content: `Added ${role} to you`})
            }
           }
       })
    }
}