const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { readdirSync } = require("fs")
const { stripIndents } = require("common-tags")
const { cyan } = require("../../colours.json")

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "halp", "commands"],
        usage: "(command)",
        category: "miscellaneous",
        description: "Displays all commands that the bot has.",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

      let prefix = db.get(`${message.guild.id}.prefix`)
        const embed = new MessageEmbed()
            .setFooter('created with ❤︎ by dexxotri#7777')
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL())

        if(!args[0]) {
            const categories = readdirSync("./commands/")

            embed.setDescription(`**Prefix:** ${prefix}`)
            .setFooter('created with ❤︎ by dexxotri#7777')
            .setColor("79c433")
            
            
            categories.forEach(category => {
                const dir = bot.commands.filter(c => c.config.category === category)
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
                try {
                  embed.addField(`❯ ${capitalise} [${dir.size}]:\n`, dir.map(c => `\`${c.config.name}\``).join(" "))

                } catch(e) {

                }
            })
            return message.channel.send(embed)
        } else {
            let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if(!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`))
            command = command.config

            embed.setDescription(stripIndents`**Prefix:** \`>\`\n
            **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Accessible by:** ${command.accessableby || "Members"}
            **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None."}`)
            .setFooter('created with ❤︎ by dexxotri#7777')
            .setColor("79c433")

            return message.channel.send(embed)
        }
    }
}
