const fetch = require('node-fetch').default;
module.exports = {

    name: 'bird',
    description: 'random bird image command',
    execute(client, receivedMessage, command, args, Discord) {
        const monkey_api = 'SE2SoHPqfQ0mkJ9UMf9uXimmK'
        if(args[0]){
            var embed = new Discord.MessageEmbed()
            .setDescription(`Try: T bird`)
            receivedMessage.channel.send(embed)
            return
        }

        fetch(`https://api.monkedev.com/attachments/bird?key=${monkey_api}`)
        .then(url => url.json())
        .then(data => {
            receivedMessage.channel.send(data.url)
        })
        .catch(()=>{
            receivedMessage.channel.send("All of the birds have escaped! Hope they return soon.. :(")
        })


    }
}
