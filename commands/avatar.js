const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');
const aiko = require('aiko-premium')
const { getMember } = require('../../functions.js')

module.exports = { 
    config: {
        name: "avatar",
        description: "Sends the user's profile picture!",
        usage: "(user)",
        category: "miscellaneous",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
      
      
      let user = getMember(message, args[0])

      if(!user) {

              let embed = new MessageEmbed()
              .setFooter('created with ❤︎ by dexxotri#7777')
              .setColor("79c433")
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL())
            .setImage(message.author.displayAvatarURL())
            message.channel.send(embed)
      } else {
          let embed = new MessageEmbed()
            .setFooter('created with ❤︎ by dexxotri#7777')
            .setColor("79c433")
            .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL())
            .setImage(user.user.displayAvatarURL({dynamic : true}))
            message.channel.send(embed)
      }
    }
}