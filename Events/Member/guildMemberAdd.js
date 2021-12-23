const { MessageEmbed, WebhookClient, GuildMember} = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {

        const { user, guild} = member;

        member.roles.add('914553930418118656');

        const Welcomer = new WebhookClient ({
            id: '919611567341969529',
            token: 'MdOGWxPWVfCRvKs7JCH2NyzzgOgHCvmYZjr_mrQN1g5siQ4nxC5EnXYPffny2TwjjiFx'
        });
        const Welcome = new MessageEmbed()
        .setColor('AQUA')
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R> \nLatest MemberCount **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Welcomer.send({embeds: [Welcome]})
    }
}