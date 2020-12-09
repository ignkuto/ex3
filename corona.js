const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "corona",
        aliases: ["covid"],
        description: "Covid-19 stats of a country",
        usage: "(country)",
        category: "information",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
      let img = 'https://cdn.discordapp.com/icons/764414115900817428/a_bc5143b0e2acd564069b576490969262.webp?size=256';
      const embed = new MessageEmbed()
        .setTitle('Invalid Usage')
        .setColor('FF0000')
        .setThumbnail(img)
        .setDescription('Please enter a valid country.\nㅤ\n**Example:** ```>covid New Zealand```')
        .setFooter('created with ❤︎ by dexxotri#7777')
    let countries = args.join(" ");
    if(!countries) return message.channel.send(embed)
    if(countries === "Israel") {
      countries = "Palestine"
    }

    fetch(`https://corona.lmao.ninja/v2/countries/${countries}`)
    .then(res => res.json())
    .then(data => {
      if(data.message) return message.channel.send(embed)
      let flag = data.countryInfo.flag;
      let confirmed = data.cases.toLocaleString();
      let deaths = data.deaths.toLocaleString();
      let recovered = data.recovered.toLocaleString();
      let critical = data.critical.toLocaleString();
      let active = data.active.toLocaleString();
      let img = 'https://cdn.discordapp.com/icons/764414115900817428/a_bc5143b0e2acd564069b576490969262.webp?size=256';

      const covidembed = new MessageEmbed()
        .setAuthor("Coronavirus Statistics", img)
        .setDescription(`**Confirmed:** ${confirmed}\n**Deaths:** ${deaths}\n**Recovered:** ${recovered}\n**Critical:** ${critical}\n**Active:** ${active}`)
        .setThumbnail(flag)
        .setFooter('created with ❤︎ by dexxotri#7777')
        .setColor("79c433")
      message.channel.send(covidembed);
    })
  }
}