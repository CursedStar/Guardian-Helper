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

       

        const msg = await interaction.channel.send({ embeds: [desk], components: [row1, row2] })
        const col = await msg.createMessageComponentCollector({
          filter: (fn) => fn
        })
  
              col.on('collect', async (b) => {
                  
              
              if (b.customId === "1") {
                  await b.reply({embeds: [new MessageEmbed().setDescription('In order to invite Guardian use the button below').setColor('GREEN').setFooter('🛡️ Guardian Support')], components: [row3],ephemeral: true})
            } else if(b.customId === '2') {
                await b.reply({embeds: [new MessageEmbed().setDescription('In order to report :').setFields({
                    name: 'A user',
                    value: `Simply open a ticket on <#925402791592202321> and post proof of user abusing the bot`,
                    inline: false
                }, {
                    name: 'bug',
                    value: 'Simply report the bug on <#914552649389592627> and devs will be fixing it'
                }).setColor('GREEN').setFooter('🛡️ Guardian Support')], ephemeral: true})
            } else if(b.customId === '3') {
                await b.reply({embeds: [new MessageEmbed().setDescription('In order to set Modlogs on your server simply run the /set-logs command and put the channel you want. Then simply all logs will be sent there ').setColor('GREEN').setFooter('🛡️ Guardian Support')], ephemeral: true})
                
            } else if (b.customId === '4') {
                await b.reply({embeds: [new MessageEmbed().setDescription(`Guardian uses only channels ids and roles id. **No** personal data is stored such as passwords. Moreover you data is stored on [MongoDb](https://mongodb.com/) and can be accessed only by <@&914554015415697418> and <@791379233229504543>. Lastly your data is stored until the bot is out of the server `).setColor('GREEN').setFooter('🛡️ Guardian Support')], ephemeral: true}) } else if(b.customId === '5') {
                
            } else if (b.customId === '5') {
                await b.reply({embeds: [new MessageEmbed().setDescription(`You can purchuase premium [here](https://ko-fi.com/guardianbott/tiers) and after you buy the prefered tier you should receive <@&925748819986120764> and after you get the role open a ticket on <#925402791592202321> in order to reedem it`).setColor('GREEN').setTimestamp().setFooter('🛡️ Guardian Support')], ephemeral: true})
            }
              }) 
            } 
        
    }
