const { Message } = require("discord.js")

module.exports = {
    name: 'ping',
    description: 'this is a ping command',
    execute(receivedMessage,args){
        receivedMessage.channel.send('pong')
    }
}