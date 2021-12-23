const { CommandInteraction, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'clear messages from a channel',
    permission: 'MANAGE_MESSAGES',
    options: [
        {
            name: 'ammount',
            description: 'Select ammount of messages to delete from a channel or a user',
            type: 'NUMBER',
            required: true
        },
        {
            name: 'target',
            description: 'select a target to clear messages',
            type: 'USER',
            required: false
        }
    ],/**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
   const { channel, options} = interaction;

   const Ammount = options.getNumber('ammount')
   const Target = options.getMember('target')

   const Messages = await channel.messages.fetch();

   const respone = new MessageEmbed()
   .setColor('GREEN')

   if(Target) {
       let i = 0;
       const filtered = [];
       await Messages.filter((m) => {
           if(m.author.id === Target.id && Ammount > i) {
               filtered.push(m);
               i++;
           }
       })
       await channel.bulkDelete(filtered, true).then(messages => {
           respone.setDescription(`<:Yes:920007516581167184> Cleared ${messages.size} messages from ${Target}`);
           interaction.reply({embeds: [respone]})
       })
   }
   else {
       await channel.bulkDelete(Ammount, true).then(messages => {
           respone.setDescription(`<:Yes:920007516581167184> Cleared ${messages.size} messages from  this channel`)
           interaction.reply({embeds: [respone]})
       })
   }
    }
}