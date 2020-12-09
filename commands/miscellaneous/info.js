const os = require("os");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    config: {
        name: "botinfo",
        usage: "(command)",
        category: "miscellaneous",
        description: "Displays all commands that the bot has.",
        accessableby: "Members",
        aliases: ["info", "bi"]
    },
    run: async (bot, message, args) => {


        const duration = moment.duration(bot.uptime).format("D [days], H [hrs], m [mins], s [secs]");

        //const creatorIDs = ["455046083953950731", "738019951587229767"];
        //const createdBy = creatorIDs
            //.map(ID => client.users.cache.get(ID).username)
            //.join(", ");
        
        let link = `https://i.ibb.co/qx956Zh/topgg-1.png`
        const attachment = new Discord.MessageAttachment(link, 'topgg.png')
        
        const botInfoEmbed = new Discord.MessageEmbed()
            .setThumbnail(bot.user.displayAvatarURL())
            .setAuthor("BOT INFO", bot.user.displayAvatarURL({
                format: "png",
                dynamic: true,
                size: 2048
            }))
            .setColor("#ba6a1a")
            .addFields({
                    name: "🌐  Servers",
                    value: `\`\`\`Serving ${bot.guilds.cache.size} servers\`\`\``,
                    inline: false
                }, {
                    name: "📺  Channels",
                    value: `\`\`\`Serving ${bot.channels.cache.size} channels\`\`\``,
                    inline: false
                }, {
                    name: "👥  Users",
                    value: `\`\`\`Serving ${bot.users.cache.size} users\`\`\``,
                    inline: false
                }, {
                    name: "⏳  Ping",
                    value: `\`\`\`${Math.round(bot.ws.ping)}ms\`\`\``,
                    inline: false
                }, {
                    name: "👶  Born",
                    value: `\`\`\`${moment.utc(bot.user.createdAt).format("dddd, MMMM Do YYYY")}\`\`\``,
                    inline: false
                }, {
                    name: "⏰  Uptime",
                    value: `\`\`\`${duration}\`\`\``,
                    inline: true
                }, {
                    name: "🖥️  Processor Cores",
                    value: `\`\`\`Cores: ${os.cpus().length}\`\`\``,
                    inline: true
                }, {
                    name: "🖥️  Memory Usage",
                    value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``,
                    inline: true
                }, {
                    name: "<:system:739432191246991431>  Discord.js",
                    value: "\`\`\`v12.3.1\`\`\`",
                    inline: true
                }, {
                    name: "<:nodejs:751076206496972890>  Node.js",
                    value: `\`\`\`${process.version}\`\`\``,
                    inline: true
                }, {
                    name: "AIKO",
                    value: "\`\`\`v2.0.1\`\`\`",
                    inline: true
                }
            )
            .addField(`\u200b`, "**[Support Server](https://discord.gg/vYX9CkD)** **•** **[Website](https://aiko.cf)** **•** **[Vote](https://top.gg/bot/764051652436819968)**")
        message.channel.send(botInfoEmbed);
    }
};