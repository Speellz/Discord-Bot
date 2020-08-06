const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**GÜRAY**")
        .setImage("https://media.discordapp.net/attachments/690240228006690832/692099212401442896/IMG-20191104-WA0012.jpg?width=493&height=658")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Congaz", true)
        .addField("**ÖZELLİKLER**", `
        -Mandal burun
        -Müzisyen
        -Bob Marley yan çar
        -Büyü yapar
        -Discord Turbosu ona özeldir
   `, true)
   .addField("**STATS**", `
        -Zeka NA
        -Karizma NA
        -Çeviklik NA
        -Güç NA
        -Şans NA
   `, true)
   .addField("**MOTTO**", `eze kuze ciya bave tenım`, true)
   .addField("**MESAJI**", 'Yok!')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['congaz'],
  permLevel: 0
};

exports.help = {
  name: 'güray',
  description: 'Güray hakkında bilgi verir',
  usage: 'güray'
};
