const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**VİTO**")
        .setImage("https://media.discordapp.net/attachments/198588643261153280/692017758858379305/IMG_20191109_170119.jpg?width=493&height=657")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Dönes", true)
        .addField("**ÖZELLİKLER**", `
        -50 Yaşında olmasına rağmen 20 gibi gösterir
        -Çok güzel akıl verir
        -Kendine has gülüşü vardır
        -Sağlam kasaya sahip
        -Doblosundan baltayı asla eksik etmez
   `, true)
   .addField("**STATS**", `
        -Zeka %89
        -Karizma %74
        -Çeviklik %28
        -Güç %71
        -Şans %36
   `, true)
   .addField("**MOTTO**", `Saldıray Abi`, true)
   .addField("**MESAJI**", 'Alevilerin mumu sönmesin!')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['deniz', 'dones', 'dönes'],
  permLevel: 0
};

exports.help = {
  name: 'vito',
  description: 'Vito hakkında bilgi verir',
  usage: 'vito'
};
