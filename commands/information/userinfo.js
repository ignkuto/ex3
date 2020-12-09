const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = { 
    config: {
        name: "userinfo",
        aliases: ["whois", "id", "ud"],
        description: "info about user",
        category: "information",
        usage: "userinfo <user>",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new MessageEmbed()
            .setAuthor(bot.user.username, bot.user.displayAvatarURL())
            .setFooter('created with ❤︎ by dexxotri#7777', member.displayAvatarURL)
            .setColor("79c433")

            .addField('Member information:', stripIndents`**Display name:** ${member.displayName}
            **Joined:** ${joined}
            **Roles:** ${roles}`)

            .addField('User information:', stripIndents`**ID:** ${member.user.id}
            **Username:** ${member.user.username}
            **Tag:** ${member.user.tag}
            **Created:** ${created}`)

        if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed)
    }
}