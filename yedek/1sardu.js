const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Şura**")
        .setImage("https://cdn.discordapp.com/attachments/690240228006690832/692085911319478362/Screenshot_69.png")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Sardu", true)
        .addField("**ÖZELLİKLER**", `
        -Kitap sözleri paylaşır
        -Her an dersi veya sınavı çıkabilir
        -Güzel sarma ve kek yapar
        -Boş yeteneği yüksektir
        -İyi fotoğraf çeker
   `, true)
   .addField("**STATS**", `
        -Zeka %59
        -Karizma %76
        -Çeviklik %53
        -Güç %55
        -Şans %69
   `, true)
   .addField("**MOTTO**", `Aslına bakarsan,
                           vicdan ve korkaklık
                           aynı şeydir Basil.
                           Vicdan,şirketin
                           piyasada bilinen
                           ticari adıdır.
                           Hepsi bu.
  `, true)
   .addField("**MESAJI**", 'Bak bir varım bir yokum')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sardu', 'sardunya'],
  permLevel: 0
};

exports.help = {
  name: 'şura',
  description: 'Şura hakkında bilgi verir',
  usage: 'şura'
};
