const { Message } = require("discord.js")

module.exports = {
    name: 'ping',
    description: 'this is a ping command',
    execute(client, receivedMessage,command, args, Discord){
            
            receivedMessage.channel.send("Pinging...").then(result =>{
             
              var ping = result.createdTimestamp - receivedMessage.createdTimestamp;
              var embed = new Discord.MessageEmbed()
              .setDescription(`Your ping is ${ping}`)
              result.edit(embed)
            })
        
    }
}