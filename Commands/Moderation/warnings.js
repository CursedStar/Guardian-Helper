const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const db = require('../../Models/WarningDB');

module.exports = {
    name: 'warnings',
    description: 'Warnings System',
    permission: 'MANAGE_MESSAGES',
    options: [
        {
            name: "add",
            description: "Adds a warn to a member",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'target',
                    description: 'Select a Target',
                    type: 'USER',
                    required: true
                },
                {
                    name: 'reason',
                    description: 'provide a reason',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'evidence',
                    description: 'Provide evidence',
                    type: 'STRING',
                    required: false
                },
            ]
        },
        {
            name: "check",
            description: "Checks the warnings",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'target',
                    description: 'Select a Target',
                    type: 'USER',
                    required: true
                },
            ]
        },
        {
            name: "remove",
            description: "Removes a specific warning",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'target',
                    description: 'Select a Target',
                    type: 'USER',
                    required: true
                },
                {
                    name: 'warnid',
                    description: 'Provide the warning ID',
                    type: 'NUMBER',
                    required: true
                }
            ]
        },
        {
            name: "clear",
            description: "Clears all warns",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'target',
                    description: 'Select a Target',
                    type: 'USER',
                    required: true
                },
            ]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        const Sub = interaction.options.getSubcommand(['add', 'check', 'remove', 'clear']);
        const Target = interaction.options.getMember('target');
        const Reason = interaction.options.getString('reason');
        const Evidence = interaction.options.getString('evidence') || 'None Provided';
        const WarnId = interaction.options.getNumber('warnid') - 1;
        const WarnDate = new Date(interaction.createdTimestamp).toLocaleDateString();

        if (Sub === 'add') {
            db.findOne({ GuildID: interaction.guildId, UserID: Target.id, UserTag: Target.user.tag }, async (err, data) => {
                if (err) throw err;
                if (!data) {
                    data = new db({
                        GuildID: interaction.guildId,
                        UserID: Target.id,
                        UserTag: Target.user.tag,
                        Content: [
                            {
                                ExecuterID: interaction.user.id,
                                ExecuterTag: interaction.user.tag,
                                Reason: Reason,
                                Evidence: Evidence,
                                Date: WarnDate
                            }
                        ]

                    })
                } else {
                    const obj = {
                        ExecuterID: interaction.user.id,
                        ExecuterTag: interaction.user.tag,
                        Reason: Reason,
                        Evidence: Evidence,
                        Date: WarnDate
                    }
                    data.Content.push(obj)
                }
                data.save()
            });

            interaction.reply({
                embeds: [new MessageEmbed()
                    .setTitle('User Warned')
                    .setColor('GREEN')
                    .setDescription(`<:Yes:920007516581167184> Successfully warned ${Target.user.id} || ${Target.id}`)
                    .setFields({
                        name: 'Reason',
                        value: `${Reason}`,
                        inline: true
                    }, {
                        name: 'Evidence',
                        value: `${Evidence}`
                    })
                    .setTimestamp()
                ]
            })
        } else if (Sub === 'check') {
            db.findOne({ GuildID: interaction.guildId, UserID: Target.id, UserTag: Target.user.tag }, async (err, data) => {
                if (err) throw err;
                if (data) {
                    interaction.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(`${Target} /s warnings`)
                            .setColor('DARK_BLUE')
                            .setDescription(`${data.Content.map(
                                (w, i) => `**ID**:${i + 1}\n**By**: ${w.Executertag}\n **Date**: ${w.Date}\n**Reason**: ${w.Reason}\n**Evidence**: ${w.Evidence}
                            \n`


                            ).join("")}`)
                        ]
                    });
                } else {
                    interaction.reply({ embeds: [new MessageEmbed().setDescription(`<:Failure:917458729622974566> ${Target} | |${Target.id}| has no warnings`).setColor('RED')] })
                }
            });
        } else if (Sub === 'remove') {
            db.findOne({ GuildID: interaction.guildId, UserID: Target.id, UserTag: Target.user.tag }), async (err, data) => {
                if (err) throw err;
                if (data) {
                    data.Content.splice(WarnId, 1)
                    interaction.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(`Success`)
                            .setDescription(`<:tickgreen:917121901556531221>  ${Target} 's warning id: ${WarnId + 1} has been removed `)]
                    })
                } else {
                    interaction.reply({ embeds: [new MessageEmbed().setDescription(`<:Failure:917458729622974566> ${Target} | |${Target.id}| has no warnings`).setColor('RED')] })
                }
            }
        } else if (Sub === 'clear') {

        }

    }
}