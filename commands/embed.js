module.exports = {
    name: 'embed',
    aliases: ['announce', 'list', 'edit'],
    description: 'this is embed command',
    execute(client, receivedMessage, command, args, Discord) {

        // guild.channels.get(channelID).fetchMessage(messageID).edit('New Content')
        // channel.messages.fetch

        // to read each line? 
        // var lines = $('textarea').val().split('\n');
        // for (var i = 0; i < lines.length; i++) {
        //     //code here using lines[i] which will give you each line
        // }

        if (command == 'announce') {
            const u= args.join(' ')
            const usertext = u.toUpperCase()
            const embed = new Discord.MessageEmbed()
                .setDescription(`***${usertext}***`)
            receivedMessage.channel.send(embed)
        }

        if (command == 'list') {
            const list = args.join('\n*~ ')
            const embed = new Discord.MessageEmbed()
                .setDescription(`*~ ${list}`)
            receivedMessage.channel.send(embed)

        }

        if (command == 'edit') {           
                receivedMessage.channel.messages.fetch({ around: args, limit: 1 })
                .then(msg => {
                    console.log(args)
                    args.shift();
                    console.log(args)
                    const list = args.join(' ')
                    const fetchedMsg = msg.first();
                    const embed = new Discord.MessageEmbed()
                        .setDescription(`${list}`)
                    fetchedMsg.edit(embed);
                })
            
        }

    }
}