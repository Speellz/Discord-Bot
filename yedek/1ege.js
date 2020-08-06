const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**EGE**")
        .setImage("https://cdn.discordapp.com/attachments/691979215209234452/692103130606993468/Screenshot_68.png")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Karga", true)
        .addField("**ÖZELLİKLER**", `
        -Gargamel
        -Mülteci
        -Otlakçı
        -Müziğimsi bir şey yapar
        -Saçı dökülür
   `, true)
   .addField("**STATS**", `
        -Zeka NA
        -Karizma NA
        -Çeviklik NA
        -Güç NA
        -Şans NA
   `, true)
   .addField("**MOTTO**", `Gaaakk`, true)
   .addField("**MESAJI**", 'Burnum ananın amına girsin!')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karga', 'gak'],
  permLevel: 0
};

exports.help = {
  name: 'ege',
  description: 'Ege hakkında bilgi verir',
  usage: 'ege'
};
