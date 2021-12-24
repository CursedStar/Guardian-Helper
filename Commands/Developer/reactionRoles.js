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

       const iFilter = i => i.user.id === interaction.member.id;

       const collector = m.createMessageComponentCollector({filter: iFilter, time: 60000});

       collector.on('collect', async i => {
           if(i.customId === 'updates') {
               const role = interaction.guild.roles.cache.get('923555572433956864')
               if(i.member.roles.cache?.has('923555572433956864')) {
                   i.member.roles.remove('923555572433956864')
                   i.reply({content: `Removed ${role} from you`, ephemeral: true})
               } else {
                   i.member.roles.add('923555572433956864')
                   i.reply({content: `Added ${role} to you`, ephemeral: true})
               }
           } else if(i.customId === 'status') {
            const role = interaction.guild.roles.cache.get('923555712968294450')
            if(i.member.roles.cache?.has('923555712968294450')) {
                i.member.roles.remove('923555712968294450')
                i.reply({content: `Removed ${role} from you`, ephemeral: true})
            } else {
                i.member.roles.add('923555712968294450')
                i.reply({content: `Added ${role} to you`, ephemeral: true})
            }
           } else if(i.customId === 'announcments') {
            const role = interaction.guild.roles.cache.get('923555650439622656')
            if(i.member.roles.cache?.has('923555650439622656')) {
                i.member.roles.remove('923555650439622656')
                i.reply({content: `Removed ${role} from you`, ephemeral: true})
            } else {
                i.member.roles.add('923555650439622656')
                i.reply({content: `Added ${role} to you`, ephemeral: true})
            }
           }
       })
    }
}