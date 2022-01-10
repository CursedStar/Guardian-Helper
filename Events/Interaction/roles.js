const { CommandInteraction, MessageEmbed, Client} = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if(interaction.isButton()) {
            const ButtonInteraction = interaction;
            const chck = ButtonInteraction.member.roles.cache.get(`${ButtonInteraction.customId}`);
            const rle = ButtonInteraction.customId;
            const rolecheck = interaction.guild.roles.cache.get(`${rle}`);

            if (rolecheck) {
                const err = new MessageEmbed().setColor('DARK_RED').setDescription('<:wrong:925384936347795456> is role is superior than the bots role, bots role should be higher than the role that is given."')

                if(!ButtonInteraction.member.guild.roles.cache.get(`${ButtonInteraction.customId}`)) return ButtonInteraction.reply({content: 'This role is invalid', ephemeral: true});

                if(rolecheck.position > ButtonInteraction.guild.me.roles.highest.position) return ButtonInteraction.reply({embeds: [err], ephemeral: true});

                if(!chck) {
                    ButtonInteraction.member.roles.add(`${rle}`);
                    ButtonInteraction.reply({content: `This role was successfully given to you`, ephemeral: true});
                }  else if (chck) {
              
                    ButtonInteraction.member.roles.remove(`${rle}`);
                           ButtonInteraction.reply({
                              content: `This role was successfully removed from you`,
                              ephemeral: true,
                                  });
                                }
            }
        }
    }
}