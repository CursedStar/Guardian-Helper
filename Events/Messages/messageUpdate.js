const {MessageEmbed, Message, WebhookClient } = require('discord.js');

module.exports = {
    name: 'messageUpdate',
    /**
     * 
     * @param {Message} oldMessage 
     * @param {Message} newMessage 
     */
    execute(oldMessage, newMessage) {
        let happen = Math.floor(new Date().getTime()/1000.0)
        if(oldMessage.author.bot) return;

        if(oldMessage.content === newMessage.content) return;

        const Count = 1950;

        const Original = oldMessage.content.slice(0, Count) + (oldMessage.content.length > 1950 ? "..." : "");
        const Edited = newMessage.content.slice(0, Count) + (oldMessage.content.length > 1950 ? "..." : "");

        const Log = new MessageEmbed()
        .setColor('#36393f')
        .setDescription(`📘 A [message](${newMessage.url}) by ${newMessage.author} was edited in ${newMessage.channel}.`)
        .addFields({
            name: 'Original',
            value: `\n${Original}`,
            inline: false
        },{
            name: 'Edited',
            value: `\n${Edited} `.slice("0", "4096"),
            inline: false
        }, {
            name: 'Action performed',
            value: `(<t:${happen}:R>)`,
            inline: false
        })
        .setFooter(`Member ${newMessage.author.tag} | ID: ${newMessage.author.id}`)

        new WebhookClient({
            url: 'https://discord.com/api/webhooks/921799173156773939/mzAVewWsQ2FZn1j_0_rlzkLyEYb3greDmS6s0wXqIFu8eKiuT6cw8IRcyXX3u__8SKyS'
        }).send({embeds: [Log]}).catch((err) => console.log(err));
    }
}