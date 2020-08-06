const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**EMİRHAN**")
        .setImage("https://cdn.discordapp.com/attachments/692084800403537963/692092175504375878/90_535_084_77_64_20200122_191821.jpg")
        .setColor(0x00AE86)
        .addField("**LAKABI**", "Doktor", true)
        .addField("**ÖZELLİKLER**", `
        -Manipülatif
        -Ayı sevdalısı
        -Egemenle burun kardeşi
        -Fakir Doğu Demirkol
        -Eminemin yan çarı
   `, true)
   .addField("**STATS**", `
        -Zeka %87
        -Karizma %71
        -Çeviklik %80
        -Güç %82
        -Şans %32
   `, true)
   .addField("**MOTTO**", `Zınk zınk zınk`, true)
   .addField("**MESAJI**", 'am sori goddotte')


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emo'],
  permLevel: 0
};

exports.help = {
  name: 'emirhan',
  description: 'Emirhan hakkında bilgi verir',
  usage: 'emirhan'
};
