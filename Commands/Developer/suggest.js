const { CommandInteraction, MessageEmbed, Client} = require('discord.js');

module.exports = {
    name: 'suggest',
    description: 'suggets things for bot',
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
      
        interaction.reply({content: 'Alright check dms', ephemeral: true})

        const Questions = [
            'Hey there ! In order to submit your suggestion simply type it below',
            'Can you explain the suggestion as detailed as possible?',
            'Oh alright! Thanks for your suggestion, it will be forwarded to devs. Type anything to proceed',
            'Successfully submited your suggestion thank you :)'
        ]
         let collectCounter = 0;
         let endCounter = 0;

         const filter =  m => m.author.id === interaction.member.id;
         const appStart = await interaction.user.send(Questions[collectCounter++])
         const channel = appStart.channel;

         const collector = channel.createMessageComponentCollector(filter);

         collector.on('collect', () => {
             if (collectCounter < Questions.length) {
                 channel.send({content: 'Thanks for your sugggestion'})
                 collector.stop('fulfilled');
             }
         });
         const appChannel = client.users.cache.get('914552680339349514'); // Channel of the Devs (Report channel)
    collector.on('end', (collected, reason) => {
        if (reason === 'fulfilled') {
            let index = 1;
            const mapped = collected
                .map(msg => {
                    return `**${index++})** | ${Questions[endCounter++]}\n-> ${
                        msg.content
                    }`;
                })
                .join('\n\n');
            
                const embed999 = new MessageEmbed().setAuthor(
                    interaction.author.tag,
                    interaction.author.displayAvatarURL({ dynamic: true })
                ).setTitle`New Bug Reported`
                    .setDescription(mapped)
                    .setColor('BLUE')
                    .setTimestamp()
            
                interaction.channel.send({embeds: [embed999]})
            
        }
    });
    }
}