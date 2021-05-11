const { Message } = require("discord.js")

module.exports = {
    name: 'todo',
    description: 'this is a todo command',
    execute(client, receivedMessage,command, args, Discord){
        var args = 2000;
        var yearEnd = 2040;

        var arr = [];

        for (var i = yearStart; i < yearEnd+1; i++) {
            arr.push(i);
        }
        receivedMessage.channel.send('pong')
    }
}