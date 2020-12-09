const { Manager } = require("erela.js");
const fetch = require("node-fetch")
const db = require('quick.db');
const client = require('discord.js')
const { GiveawaysManager } = require("discord-giveaways");
client.rpg = []
client.rpg.stats = ["int", "str", "wis", "dex", "con", "cha"];
//console.log(client.rpg.stats)
module.exports = bot => {

   fetch(`https://top.gg/api/bots/764051652436819968/stats`, {
    method: "POST",
    headers: { 
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NDA1MTY1MjQzNjgxOTk2OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1OTYyNTE0fQ.I6bd5CAt6cKOrFW2BDI7yckpCifA-dhbtQMWBVTEtNw",
        "Content-Type": "application/json"
        },
        body: JSON.stringify({"server_count": bot.guilds.cache.size })
      }).then(response => response.text())
    .then(console.log).catch(console.error);


    console.log(`Success!`);

    bot.user.setPresence({
            status: 'online',
            activity: {
                name: 'DM ModMail',
               type: 'WATCHING'
            }
       })
};



