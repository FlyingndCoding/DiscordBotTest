const fetch = require('node-fetch').default;
module.exports = {
    name: 'insult',
    description: 'this is an insult command',
    execute(client, receivedMessage,command, args, Discord){
       // receivedMessage.author.toString()
        if(!args[0]){
            fetch(`https://evilinsult.com/generate_insult.php?lang=en&type=json`)
            .then(insult => insult.json())
            .then(data => {
                receivedMessage.channel.send( `${receivedMessage.author.toString()} - ${data.insult}`)
            })
            .catch(()=>{
                receivedMessage.channel.send("I'm feeling down atm ): ")
            })

            return

        }
        var sendertag = args[0]
        fetch(`https://evilinsult.com/generate_insult.php?lang=en&type=json`)
        .then(insult => insult.json())
        .then(data => {
            receivedMessage.channel.send( `${sendertag} - ${data.insult}`)
        })
        .catch(()=>{
            receivedMessage.channel.send("I'm feeling down atm ): ")
        })
    }
}