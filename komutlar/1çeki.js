const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**ÇEKİRGE**")
        .setImage("https://media.discordapp.net/attachments/391637291572920320/692010647910875186/IMG_3786.JPG")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Çeki", true)
        .addField("**ÖZELLİKLER**", `
        -Bursalıdır
        -Karşı cinsin kokusunu 500 metreden alır
        -Gitar çalarak karşı cinsi etkiler
        -Kağıttan katana ustasıdır
        -Korktuğunda taşşağını sıkar
   `, true)
   .addField("**STATS**", `
        -Zeka %69
        -Karizma %68
        -Çeviklik %92
        -Güç %34
        -Şans %19
   `, true)
   .addField("**MOTTO**", `Burada sikiş var sikiş`, true)
   .addField("**MESAJI**", 'Beni sikemeyenin anasını sikerim!')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çeki',
  description: 'Çeki hakkında bilgi verir',
  usage: 'çeki'
};
