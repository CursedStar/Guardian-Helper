const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Displays the avatar of the specified target.",
    options: [
        {
            name: "target",
            description: "Select the target.",
            type: "USER",
            required: false
        }
    ],
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const target = interaction.options.getMember("target") || interaction.member;

        const avatar = new MessageEmbed()
        .setColor('GREEN')
        .setAuthor(`${target.tag}\s Avatar`)
        .setImage(target.displayAvatarUrl({dynamic: true}))
        .setFooter(`Requested by ${interaction.user.tag}`,interaction.user.avatarURL())

        interaction.reply({embds: [avatar]})

    }
}