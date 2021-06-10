module.exports = {
    name: 'bottagreply',
    description: 'this is reply command',
    execute(client, receivedMessage, args, Discord) {
        
        const embed = new Discord.MessageEmbed()
            .setDescription("Why in the world would you even tag a bot, are you dumb? " + receivedMessage.author.toString() + "\nLoading current prefix...")

        receivedMessage.channel.send(embed).then((msg) => {
            msg.react('🙄')


            setTimeout(() => {
                var embed = new Discord.MessageEmbed()
                    .setDescription('Current Prefix : ' + process.env.PREFIX + '\nYou can make an ai-chat channel to activate chatbot')
                msg.edit(embed)
            }, 5000)

        })
    }
}