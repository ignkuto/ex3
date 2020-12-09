const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../colours.json");

module.exports = {
  config: {
    name: 'faq',
    category: "information",
    description: 'Gives the user an embed about where they can see the frequently asked questions.'
},
    run: async (bot, message, args) => {
      let img = 'https://cdn.discordapp.com/icons/764414115900817428/a_bc5143b0e2acd564069b576490969262.webp?size=256';
      const faqEmbed = new MessageEmbed()
        .setColor('79c433')
        .setTitle('Frequently Asked Questions')
        .addField('What is Advertising Central?', 'Advertising Central is a Discord Advertising Server for those who\'d like to grow their servers and Bots.\nㅤ')
        .addField('How do I advertise my server?', `To advertise your server, simply go to the category that fits your server best, and post an ad for the server you\'re advertising.\nㅤ`)
        .addField('Who created Advertising Central?', '[Roonie](https://www.youtube.com/channel/UCO_6MNj2He90Gs0ulEv6E8Q) is the original creator and founder of Advertising Central.\nㅤ\n*"I made Advertising Central with a hope to share our communities to others without any borders"*\nㅤ')
        .addField('More', '- [Roonie\'s Youtube](https://www.youtube.com/c/Roonie/)\n- [Roonie\'s Twitter](https://twitter.com/RooniesHideOut)\n- [Roonie\'s HideOut](https://discord.gg/SwD8Dww)')
        .setThumbnail(img)
        .setFooter('created with ❤︎ by dexxotri#7777');
      return message.author.send(faqEmbed).then(message.react('✅'))
    }
}