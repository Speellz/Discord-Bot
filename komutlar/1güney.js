const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Güney**")
        .setImage("https://media.discordapp.net/attachments/198588643261153280/692045970988597308/IMG-1858.jpg?width=467&height=658")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "İsmail", true)
        .addField("**ÖZELLİKLER**", `
        -Taksici oğlu
        -Her türlü değere sövebilir
        -Edgelord
        -Pyromaniac
        -Dönemsel olarak İsmail moduna geçiş yapar
   `, true)
   .addField("**STATS**", `
        -Zeka %61
        -Karizma %83
        -Çeviklik %86
        -Güç %89
        -Şans %31
   `, true)
   .addField("**MOTTO**", `Aklınızda kalan tek şey bu`, true)
   .addField("**MESAJI**", 'Ananın amı!')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'güney',
  description: 'Güney hakkında bilgi verir',
  usage: 'güney'
};
