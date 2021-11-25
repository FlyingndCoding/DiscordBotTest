const fs = require('fs')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'this is help command',
    execute(client, receivedMessage, command, args, Discord) {

        // const helpFiles = fs.readdirSync('./commands/help/').filter(file => file.endsWith('.js'));
        // for (const file of helpFiles) {
        //     const helpcommand = require(`../commands/help/${file}`);
        //     if (helpcommand.name) {
        //         client.commands.set(helpcommand.name, helpcommand);
        //     } else {
        //         continue;
        //     }
        // }

        var sendertag = receivedMessage.member.user.tag
        const embed = new MessageEmbed()
            .setTitle("Help Panel")
            .setDescription("Avialable commands")
            .setFooter("Requested by: " + sendertag + "\t\tPage 1")
            .addField("Commands: ", "T help \nT ping \nT suggestions or T suggest \nT animals \nT List \nT announce")
            //\nT weather <city,country> \nT time \nT channel")
            .setThumbnail("https://www.prensario.net/Multimedios/imgs/43206_750.jpg")
        
        receivedMessage.channel.send(embed).then((msg) => {
            msg.react('⬅️')
            msg.react('➡️')

            const filter = (r, u) => (r.emoji.name === '➡️' || r.emoji.name === '⬅️') && u == receivedMessage.author
            const collector = msg.createReactionCollector(filter);
            collector.on('collect', (r, u) => {
                if (u!=receivedMessage.author.bot){
                if (r.emoji.name === '➡️') {
                    msg.delete()
                    client.commands.get('help2').execute(client, receivedMessage, args, Discord);
                   // receivedMessage.channel.send("Reacted with " + '➡️');
                }
                if (r.emoji.name === '⬅️') {
                    var embed = new Discord.MessageEmbed()
                    .setDescription(`Why do you expect a page before the first one? Loading Page 1 ...`)
                    msg.edit(embed)

                    setTimeout(() => {
                        msg.delete()
                    }, 5000)

                    setTimeout(() => {

                        client.commands.get('help1').execute(client, receivedMessage, args, Discord);
                    }, 6000)
                }}
                else { return receivedMessage.channel.send('Oops, Error!')}
            });

        })
    }
}


    
