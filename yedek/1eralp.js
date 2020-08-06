const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Eralp**")
        .setImage("https://media.discordapp.net/attachments/690240228006690832/692079400564293685/IMG-20190602-WA0022.jpg?width=877&height=658")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Muşbi", true)
        .addField("**ÖZELLİKLER**", `
        -"Sylas kırık değil"
        -Otaku
        -"Kanka yeni bir oyun buldum"
        -Sabaha kadar LoL oynar
        -Dizi/Film izlerken sonunu başta tahmin eder
   `, true)
   .addField("**STATS**", `
        -Zeka %86
        -Karizma %73
        -Çeviklik %31
        -Güç %75
        -Şans %88
   `, true)
   .addField("**MOTTO**", `Hayat sadece bir oyun`, true)
   .addField("**MESAJI**", 'Uyuyor')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['erolp', 'muşbi'],
  permLevel: 0
};

exports.help = {
  name: 'eralp',
  description: 'Eralp hakkında bilgi verir',
  usage: 'eralp'
};
