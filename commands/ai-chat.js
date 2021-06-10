const fetch = require('node-fetch').default;
module.exports = {
    name: 'ai-chat',
    aliases: [],
    description: 'this is ai-chat command',
    execute(client, receivedMessage,command, args, Discord) {
        const channel = receivedMessage.guild.channels.cache.find(c => c.name === 'ai-chat');
        if(!channel) return

        const usertext = receivedMessage.content.toString()
        
            const monkey_api = 'SE2SoHPqfQ0mkJ9UMf9uXimmK'
           
        fetch(`https://api.monkedev.com/fun/chat?msg=${usertext}&uid=${receivedMessage.author.id}&key=${monkey_api}`)
        .then(response => response.json())
        .then(data => {
            channel.send(data.response)
        })
        .catch(()=>{
            channel.send("I'm Sorry, I didn't quite get that. Let me rest for a bit, I'll reply later Zzz")
        })


    }
}