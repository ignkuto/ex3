module.exports = {
    config: {
        name: "clear",
        description: "Clear messages from the chat!",
        usage: "#clear",
        category: "moderation",
        accessableby: "Moderators",
        aliases: ["purge","nuke"]
    },
    run: async (bot, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        const { permCheck } = require('../../functions.js');
let perm = permCheck(message, false, 'clear')
      if(perm === false) return message.channel.send('No Perms');

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Yeah.... That's not a number? I also can't delete 0 messages by the way.").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Sorry... I can't delete messages.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount)
            .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}