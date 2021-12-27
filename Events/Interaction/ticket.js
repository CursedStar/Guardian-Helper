const { BaseMessageComponent, MessageActionRow, MessageEmbed, MessageButton , CommandInteraction} = require('discord.js');
const client = require('../../Structures/index');
const { staff } = require('../../Structures/config.json')

module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        if(interaction.customId === 'tic') {
            const guild = interaction.guild;

            interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                    }, {
                        id: interaction.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL']
                    }, {
                        id: '914554015415697418',
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES', 'MANAGE_CHANNELS']
                    }, {
                        id: '923555482004779079',
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES', 'MANAGE_CHANNELS']
                    }
                ],
                type: 'GUILD_TEXT', parent: '914551552897843290'
            }).then(async channel => {
                (await channel.send({content: `Welcome <@${interaction.user.id}> <@&914554015415697418>`, embeds: [embed], components: [del]}))
            }).then(interaction.reply({content: 'Done Created ticket', ephemeral: true}))
            const embed = new MessageEmbed()
            .setTitle('Ticket')
            .setDescription('Hello there, \n The staff will be here as soon as possible  meanwhile tell us about your issue!\nThank You!')
            .setColor('GREEN')
            .setTimestamp()
            .setAuthor(interaction.guild.name, interaction.guild.iconURL({
            dynamic: true
        }))

        const del = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('del')
                .setLabel('🗑️ Delete Ticket!')
                .setStyle('DANGER'),
            );
            interaction.user.send('Your ticket has been opened!');
            setTimeout(() => {
                interaction.channel.bulkDelete(1)
            }, 5000)
        } else if (interaction.customId === 'del') {

            const thread = interaction.channel
            thread.delete();

        }
        }
    }
