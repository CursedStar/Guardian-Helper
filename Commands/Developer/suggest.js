const { CommandInteraction, MessageEmbed, WebhookClient } = require ('discord.js');

module.exports = {
    name: "suggest",
    description: "Create a suggestion in an organized matter!",
    options: [
        {
            name: "type",
            description: "Select the type!",
            required: true,
            type: "STRING",
            choices: [
                {
                    name: "Command",
                    value: "Command"
                },
                {
                    name: "Event",
                    value: "Event"
                },
                {
                    name: "System",
                    value: "System"
                },
            ]
        },
        {
            name: "name",
            description: "Provide a name for your suggestion!",
            type: "STRING",
            required: true
        },
        {
            name: "functionality",
            description: "Describe the funcionality of this suggestion!",
            type: "STRING",
            required: true
        },
    ],
  /**
   * 
   * @param {CommandInteraction} interaction 
   */
    async execute(interaction) {
        const { options } = interaction;

        const type = options.getString("type");
        const name = options.getString("name");
        const funcs = options.getString("functionality");

        const Error = new MessageEmbed()
        .setColor("RED")
        .setTitle("❗ There was an error.")
        .setDescription(`\n
        Wrong channel.`)
        .setFields(
            {name: "Click the channel below if you want to sugget something", value: "<#914552680339349514>", inline: true },
        )
     
        if(interaction.channelId != "914552680339349514") return interaction.reply({embeds: [Error], ephemeral: true})

        interaction.reply({content: 'done', ephemeral: true})

        const Response = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${interaction.member} has suggested a ${type}.`)
        .addField("Name", `${name}`, false)
        .addField("Functionality", `${funcs}`, false)
        const message = await interaction.channel.send({embeds: [Response], fetchReply: true });
                message.react("<:upvote:925705906791018497>");
                message.react("<:downvote:925705928387461170>");
    }
};