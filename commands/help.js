module.exports = {
    name: 'help',
    description: 'this is help command',
    execute(receivedMessage,args){
        const { MessageEmbed } = require('discord.js');
        var sendertag = receivedMessage.member.user.tag
        const embed = new MessageEmbed()
        .setTitle("Help Panel")
        .setDescription("Avialable commands")
        .setTimestamp()
        .setFooter("Requested by: " + sendertag)
        .addField("Commands: ", "-help \n-ping")
        .setThumbnail("https://www.prensario.net/Multimedios/imgs/43206_750.jpg")
        receivedMessage.channel.send(embed);
    }
}