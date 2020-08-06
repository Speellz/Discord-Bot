const Discord = require('discord.js');
exports.run = function (client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
    if (!args[0]) return message.channel.send(" **Lütfen Silinicek Mesaj Miktarını Yazın.!** ");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(` ${args[0]} Adet Mesajı Sildim. ✅
https://media1.tenor.com/images/5277b8f3f429877e33440445d23960bf/tenor.gif?itemid=9148408`).then(msg => msg.delete(10000));
    })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['clear'],
    permLevel: 2
};

exports.help = {
    name: 'temizle',
    description: 'Belirlenen miktarda mesajı siler.',
    usage: 'temizle <silinicek mesaj sayısı>'
};
