const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**YAĞIZ**")
        .setImage("https://media.discordapp.net/attachments/576903800959533056/692054312112750612/IMG-20190715-WA0002.jpg?width=493&height=658")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Üçgen", true)
        .addField("**ÖZELLİKLER**", `
        -Şakamatik
        -Ağlak bebe
        -"Dostum bak!"
        -Politikacı
        -Şiddete meyilli
   `, true)
   .addField("**STATS**", `
        -Zeka %61
        -Karizma %83
        -Çeviklik %64
        -Güç %89
        -Şans %90
   `, true)
   .addField("**MOTTO**", `Acilen oyundan kaldırılması lazım`, true)
   .addField("**MESAJI**", 'Şüf ve Güneyin amk!')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yağız',
  description: 'Yağız hakkında bilgi verir',
  usage: 'yağız'
};
