const { CommandInteraction, Client, MessageActionRow, MessageButton, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'btnroles',
    description: 'setUp reaction roles with buttons',
    permission: 'MANAGE_ROLES',
    options: [
        {
            name: 'role1',
            description: 'Set first role',
            type: 'ROLE',
            required: true
        }, {
            name: 'role2',
            description: 'Set second role',
            type: 'ROLE',
            required: false
        }, {
            name: 'role3',
            description: 'Set third role ',
            type: 'ROLE',
            required: false
        }, {
            name: 'role4',
            description: 'Set fourth role',
            type: 'ROLE',
            required: false
        },  {
            name: 'embedmessage',
            description: 'set the embed message',
            type: 'STRING',
            required: false
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const role1 = interaction.options.getRole('role1')
        const role2 = interaction.options.getRole('role2')
        const role3 = interaction.options.getRole('role3')
        const role4 = interaction.options.getRole('role4')
        const embedmsg = interaction.options.getString('embedMessage')

        const row = new MessageActionRow();

        row.addComponents(
            new MessageButton()
            .setLabel(`${role1.name}`)
            .setStyle('SECONDARY')
            .setCustomId(`${role1.id}`)
        );

        if (role2) {
            row.addComponents(
                new MessageButton()
                .setLabel(`${role2.name}`)
                .setStyle('SECONDARY')
                .setCustomId(`${role2.id}`)
            );
        }

        if(role3) {
            row.addComponents(
                new MessageButton()
                .setLabel(`${role3.name}`)
                .setStyle('SECONDARY')
                .setCustomId(`${role3.id}`)
            );
        }

        if(role4) {
            row.addComponents(
                new MessageButton()
                .setLabel(`${role4.name}`)
                .setStyle('SECONDARY')
                .setCustomId(`${role4.id}`)
            );
        }
        const errembed = new MessageEmbed().setColor('RED').setDescription('<:wrong:925384936347795456> You cant add roles higher than you')
        const errbot = new MessageEmbed().setColor('RED').setDescription('<:wrong:925384936347795456> is role is superior than the bots role, bots role should be higher than the role that is given.')

        const response = new MessageEmbed()
        .setColor('AQUA');
        if(embedmsg) await response.setDescription(`${embedmsg}`)
        if(embedmsg === null) await response.setDescription('<:roles:925451072359764068> Click on buttons to get or remove roles')

        const success = new MessageEmbed().setColor('GREEN').setDescription(' <:tick:925056003899260928> Done buttons made successfully')

        if(role1.position > interaction.member.roles.highest.position) {
            return interaction.reply({embeds: [errembed], ephemeral: true });
            } else if(role1.position > interaction.guild.me.roles.highest.position) return interaction.reply({embeds: [errbot], ephemeral: true });
        
            if (role2) {
            if(role2.position > interaction.member.roles.highest.position) {
            return interaction.reply({embeds: [errembed], ephemeral: true });
            } else if(role2.position > interaction.guild.me.roles.highest.position) return interaction.reply({embeds: [errbot], ephemeral: true });
            }
            
            if (role3) {
            if(role3.position > interaction.member.roles.highest.position) {
            return interaction.reply({embeds: [errembed], ephemeral: true });
            } else if(role3.position > interaction.guild.me.roles.highest.position) return interaction.reply({embeds: [errbot], ephemeral: true });
            }
        
            if (role4) {
            if(role4.position > interaction.member.roles.highest.position) {
            return interaction.reply({embeds: [errembed], ephemeral: true });
            } else if(role4.position > interaction.guild.me.roles.highest.position) return interaction.reply({embeds: [errbot], ephemeral: true });
            }
              interaction.channel.send({embeds: [response], components: [row] });
        interaction.reply({embeds: [success], ephemeral: true})
        
    }
}