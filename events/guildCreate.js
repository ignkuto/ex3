const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fs = require('fs');
const { prefix } = require('../../botconfig.json');
const db = require('quick.db');

module.exports = async (bot, guild) => { 

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})

let p = db.get(`${guild.id}.prefix`)
if(!p) {
  db.set(`${guild.id}.prefix`, `${prefix}`)
}
}