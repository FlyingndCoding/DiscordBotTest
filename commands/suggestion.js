module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(client, receivedMessage,command, args, Discord){
        const channel = receivedMessage.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return receivedMessage.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(receivedMessage.author.tag, receivedMessage.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            receivedMessage.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}