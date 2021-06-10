const fetch = require('node-fetch').default;
module.exports = {
    name: 'dm',
    aliases: [],
    description: 'this is dm command',
    execute(client, receivedMessage,command, args, Discord) {
        const usertext = receivedMessage.content.toString()
        
            const monkey_api = 'SE2SoHPqfQ0mkJ9UMf9uXimmK'
           
        fetch(`https://api.monkedev.com/fun/chat?msg=${usertext}&uid=${receivedMessage.author.id}&key=${monkey_api}`)
        .then(response => response.json())
        .then(data => {
            receivedMessage.channel.send(data.response)
        })
        .catch(()=>{
            receivedMessage.channel.send("I'm Sorry, I didn't quite get that. Let me rest for a bit, I'll reply later Zzz")
        })


        


    }
}