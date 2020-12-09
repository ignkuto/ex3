const db = require("quick.db")

module.exports = {
    getMember: function(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.members.cache.get(toFind);
        
        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.cache.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
            
        if (!target) 
            target = message.member;
            
        return target;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    },

    shuffle: function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
},


permCheck: function(message,perms,command) {
  const db = require('quick.db')
      let array = db.get(`${command}.perms.${message.guild.id}`)
      if(!array) {
        if(message.member.hasPermission(["ADMINISTRATOR"])) {
          perms = true
        }
        if(message.author.id == "255327008576241674") {
          perms = true
        }
        
      } else {
        array.forEach(x => {
          if(message.member.roles.cache.some(r => r.id === x)) {
            perms = true
      } else {
        if(message.member.hasPermission(["ADMINISTRATOR"])) {
          perms = true
        }
        
      }
        })
      }

        
      return perms;
      
    },


    mail: function(code) {
      const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6d6e647bf98e54",
    pass: "25beaef9a0f205"
  }
});

const message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: `Thank you for buying Aiko premium! From the beginning of aiko we have strived to make it the best discord bot you can find! And after the project grew larger we have found that the bot will need some funding to keep it alive and for us to add more updates! Now lets not distract you from the main reason of this email, below will be your redeem code for the premium. 
    
PS: This code can only valid for one server and can be used once.
    
Code: ${code}`
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});

    }


    
}