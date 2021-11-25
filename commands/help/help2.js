const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help2',
    description: 'help page 2',
    execute(client, receivedMessage, args, Discord) {

        var sendertag = receivedMessage.member.user.tag
        const embed = new MessageEmbed()
            .setTitle("Help Panel")
            .setDescription("Avialable commands")
            .setFooter("Requested by: " + sendertag + "\t\tPage 2")
            .addField("Commands: ", "T weather <city,country> \nT time \nT channel \nT reply <Add your message> \nT insult \nT passwordgen")
            .setThumbnail("https://www.prensario.net/Multimedios/imgs/43206_750.jpg")
        receivedMessage.channel.send(embed).then((msg) => {
            msg.react('⬅️')
            msg.react('➡️')

            const filter = (r, u) => (r.emoji.name === '➡️' || r.emoji.name === '⬅️') && u == receivedMessage.author
            const collector = msg.createReactionCollector(filter);
            collector.on('collect', (r, u) => {
                if (u != receivedMessage.author.bot) {
                    if (r.emoji.name === '➡️') {

                        var embed = new Discord.MessageEmbed()
                        .setDescription(`There is no next page. Loading Page 1 ...`)
                        msg.edit(embed)

                        setTimeout(() => {
                            msg.delete()
                        }, 5000)

                        setTimeout(() => {

                            client.commands.get('help1').execute(client, receivedMessage, args, Discord);
                        }, 6000)
                    }
                    if (r.emoji.name === '⬅️') {
                        msg.delete()
                        client.commands.get('help1').execute(client, receivedMessage, args, Discord);
                    }
                }
                else { return receivedMessage.channel.send('Oops, Error!') }
            });

        })

    }
}
