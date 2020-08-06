const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"YAZI-TURA:__TURA__**",
	"YAZI-TURA:__YAZI__**"
];

exports.run = function(client, message) {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	if (cevap === "YAZI-TURA__YAZI__") {

		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://cdn.discordapp.com/attachments/691979215209234452/692110478759034890/vYNuYkLYzQecWYJMMsEYjUt4h2WXwpiekoM3RGEZkGQDRzVQLQQAblpJsEnvAXQAAAAASUVORK5CYII.png")
		message.channel.send(embedyazı);

	} else if (cevap === "YAZI-TURA:__TURA__**") {

		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://cdn.discordapp.com/attachments/691979215209234452/692110394340409405/n8TGt2TGHtmwAAAABJRU5ErkJggg.png")
		message.channel.send(embedtura);

	}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı tura','turayazı','yt','ty'],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};
