const { MessageEmbed, Message, WebhookClient } = require('discord.js');

module.exports = {
    name: 'messageDelete',
    /**
     * 
     * @param {Message} message 
     */
    execute(message) {
        if(message.author.bot) return;
        let happen = Math.floor(new Date().getTime()/1000.0)

        const Log = new MessageEmbed()
        .setColor('#36393f')
        .setDescription(`📕 A Message by ${message.author.tag} was deleted`)
        .addFields({
            name: 'Content',
            value: `${message.content ? message.content : "None"}`.slice(0, 4096),
            inline: false
        }, {
            name: 'Action performed',
            value: `(<t:${happen}:R>)`,
            inline: false
        })

        if(message.attachments.size >= 1) {
            Log.addField(`Attachments:`, `${message.attachments.map(a => a.url)}`, true)
        }

        new WebhookClient({
            url: 'https://discord.com/api/webhooks/921799173156773939/mzAVewWsQ2FZn1j_0_rlzkLyEYb3greDmS6s0wXqIFu8eKiuT6cw8IRcyXX3u__8SKyS'
        }).send({embeds: [Log]}).catch((err) => console.log(err));

    }
}