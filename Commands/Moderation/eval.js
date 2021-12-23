const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'eval',
    description: 'evaluate some code',
    options: [
        {
            name: 'code',
            description: 'code to eval',
            type: 'STRING',
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const {  options} = interaction;
        const code = options.getString('code')
        if (interaction.member.id !== '791379233229504543') return interaction.reply({content: 'This command is for developers only', ephemeral: true}) // DON'T REMOVE THIS LINE
        
        

        try {
            
            let time = Date.now()
            let res = require('util').inspect(await eval(code, { depth: 0 }));
            let time2 = Date.now()
            if (res.length > 1000) {
                let src = await require('sourcebin').create([{ content: res, language: 'javascript' }], { title: 'Eval', description: (`${code}`) })
                return interaction.reply(`Evaluated in \`${time2 - time}ms\`\n<${src.url}>`).catch(console.log)
            }
            return interaction.reply(`Evaluated in \`${time2 - time}ms\`\n\`\`\`js\n${res}\`\`\``).catch(console.log)
        } catch (e) {
            return interaction.reply(`\`\`\`${e}\`\`\``).catch(console.log)
        }
    }
}