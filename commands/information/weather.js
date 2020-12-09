const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');

module.exports = { 
    config: {
        name: "weather",
        description: "Shows the weather of a country",
        usage: "(country)",
        category: "information",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
    let img = 'https://cdn.discordapp.com/icons/764414115900817428/a_bc5143b0e2acd564069b576490969262.webp?size=256';
    let city = args.join(" ");
    let degreetype = "C";

    await weather.find({search: city, degreetype: degreetype}, function(err, result) {
        const embed = new MessageEmbed()
            .setTitle('Invalid Usage')
            .setColor('FF0000')
            .setThumbnail(img)
            .setDescription('Please enter a valid location.\nㅤ\n**Example:** ```>weather auckland```')
            .setFooter('created with ❤︎ by dexxotri#7777')
        if (!city) return message.channel.send(embed);
        if(err || result === undefined || result.length === 0) return message.channel.send(embed);

        let current = result[0].current;
        let location = result[0].location;

        const weatherembed = new MessageEmbed()
            .setAuthor(current.observationpoint)
            .setDescription(`${current.skytext}`)
            .setThumbnail(current.imageURL)
            .setFooter('created with ❤︎ by dexxotri#7777')
            .setColor("79c433")

            weatherembed.addField("Latitude", location.lat, true)
                .addField("Longitude", location.long, true)
                .addField("Feels Like", `${current.feelslike}° Degrees`, true)
                .addField("Winds", current.winddisplay, true)
                .addField("Humidity", `${current.humidity}%`, true)
                .addField("Timezone", `GMT ${location.timezone}`, true)
                .addField("Temperature", `${current.temperature}° Degrees`)
                .addField("Observation Time", current.observationtime, true)
            return message.channel.send(weatherembed);
    })
    }
}