const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**BERKAN**")
        .setImage("https://cdn.discordapp.com/attachments/198588643261153280/692067961556697108/IMG-20200324-WA0011.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/198588643261153280/692067962311671848/IMG-20200324-WA0012.jpg")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Zenci", true)
        .addField("**ÖZELLİKLER**", `
        -Karanlıkta gözükmez
        -Kamikaze
        -Fırsatçı
        -Herşeye cevabı vardır
        -Anancı
   `, true)
   .addField("**STATS**", `
        -Zeka %66
        -Karizma %43
        -Çeviklik %98
        -Güç %38
        -Şans %67
   `, true)
   .addField("**MOTTO**", `İçinde kalır`, true)
   .addField("**MESAJI**", 'Sikiş sikiş,fetiş fetiş!')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['beko', 'zenci'],
  permLevel: 0
};

exports.help = {
  name: 'berkan',
  description: 'Berkan hakkında bilgi verir',
  usage: 'berkan'
};
