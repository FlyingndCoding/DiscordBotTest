module.exports = {
    name: 'bottagreply',
    description: 'this is reply command',
    execute(receivedMessage,args){
        receivedMessage.channel.send("Why in the world would you even tag a bot, are you dumb? "+receivedMessage.author.toString())
    }
}