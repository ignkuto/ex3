const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const { get } = require("https");

module.exports = { 
    config: {
        name: "neko",
        description: "Neko for weebs",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
      
          get(`https://neko-love.xyz/api/v1/neko`, (res) => {
          const { statusCode } = res;
          if (statusCode != 200) {
              res.resume;
          }
          res.setEncoding("utf8");
          let rawData = '';
          res.on("data", (chunk) => {
              rawData += chunk;
          });
          res.on("end", () => {
              try {
                  const parsedData = JSON.parse(rawData);
                  const data = parsedData.url

                  let sembed = new MessageEmbed()
                      .setAuthor(`you're a weeb.`)
                      .setImage(data)
                      .setFooter('created with ❤︎ by dexxotri#7777')
                      .setColor("79c433")
                      
                    message.channel.send(sembed)
                  
              } catch (e) {
                  console.error(e.message);
              }
          });
      }).on("error", (err) => {
          console.error(err.message);
      });

    
    }
}