const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**OSAN**")
        .setImage("https://media.discordapp.net/attachments/690240228006690832/692027629586350121/Screenshot_80.png")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Gürbüz", true)
        .addField("**ÖZELLİKLER**", `
        -Konyalıdır ama etliekmek sevmez
        -İskender gibi kokar
        -Kısmı sağırdır
        -Kolay VAC yer
        -Gülerek şarkı söyler
   `, true)
   .addField("**STATS**", `
        -Zeka %63
        -Karizma %70
        -Çeviklik %78
        -Güç %66
        -Şans %71
   `, true)
   .addField("**MOTTO**", `Burada sikiş var sikiş`, true)
   .addField("**MESAJI**", 'Kızlar eklesin. Lütfen!')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'osan',
  description: 'Osan hakkında bilgi verir',
  usage: 'osan'
};
