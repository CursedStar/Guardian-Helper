const { MessageEmbed, WebhookClient, GuildMember, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {

        const { user, guild } = member;

      try{
        member.roles.add('914553930418118656');

        const Welcomer = new WebhookClient({
            id: '',
            token: ''
        });
        const Welcome = new MessageEmbed()
            .setColor('AQUA')
            .setAuthor(user.tag, user.avatarURL({ dynamic: true, size: 512 }))
            .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
            .setDescription(`Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R> \nLatest MemberCount **${guild.memberCount}**`)
            .setFooter(`ID: ${user.id}`)

        Welcomer.send({ embeds: [Welcome] })

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('xd')
                    .setLabel('Sent from Guardian Lounge')
                    .setDisabled()
                    .setStyle('PRIMARY')
            )

        user.send({
            embeds: [new MessageEmbed()
                .setTitle('Welcome to server')
                .setDescription(`Welcome ${user} to guardian support\n Before chatting make sure to check <#914551667976994836> and <#914552289769955338> !\n Before asking a question that has to do with bot make sure to read <#923554608998121542> If your questions wasnt answered ask on help channels`)
                .setColor('GREEN')
                .setTimestamp()], components: [row]
        })
      } catch(error) {
          console.log('user got dms locked')
      } 
    }
}
