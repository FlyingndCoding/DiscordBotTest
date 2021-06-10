const fetch = require('node-fetch').default;

module.exports = {

    name: 'reply',
    description: 'this is a reply command',
    execute(client, receivedMessage, command, args, Discord) {
        
        const monkey_api = 'SE2SoHPqfQ0mkJ9UMf9uXimmK'
        if(!args[0]){
            var embed = new Discord.MessageEmbed()
            .setDescription(`Try: T reply <Add your message>`)
            receivedMessage.channel.send(embed)
            return
        }
        const usermessage = args.join(' ')        

        fetch(`https://api.monkedev.com/fun/chat?msg=${usermessage}&uid=${receivedMessage.author.id}&key=${monkey_api}`)
        .then(response => response.json())
        .then(data => {
            receivedMessage.channel.send(data.response)
        })
        .catch(()=>{
            receivedMessage.channel.send("I'm Sorry, I didn't quite get that. Let me rest for a bit, I'll reply later Zzz")
        })


    }

}