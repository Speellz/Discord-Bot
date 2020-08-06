const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**CHİEFF**")
        .setImage("https://cdn.discordapp.com/attachments/412694392823087125/692027854724268073/IMG-20190911-WA0002.jpeg")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Şüf", true)
        .addField("**ÖZELLİKLER**", `
        -Eski asker(Emekli terminatör)
        -Yaşının 2 katı büyük gösterir
        -Base raid yerken R6 oynar
        -"Param yok alamam"
        -Tek atar
   `, true)
   .addField("**STATS**", `
        -Zeka %73
        -Karizma %96
        -Çeviklik %57
        -Güç %93
        -Şans %78
   `, true)
   .addField("**MOTTO**", `5 dakikaya geliyorum`, true)
   .addField("**MESAJI**", 'Şanlı Yuva Kuleli')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şüf', 'cif', 'chieff'],
  permLevel: 0
};

exports.help = {
  name: 'şüf',
  description: 'Şüf hakkında bilgi verir',
  usage: 'şüf'
};
