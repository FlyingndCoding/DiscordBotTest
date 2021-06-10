const fetch = require('node-fetch').default;
module.exports = {
    name: 'taim',
    description: 'this is a taim command',
    execute(client, receivedMessage,command, args, Discord){
        
        if(receivedMessage.author.id != '717928516938629123') return receivedMessage.channel.send('Lol this command is not for you.')
        
        
        fetch(`https://complimentr.com/api`)
        .then(compliment => compliment.json())
        .then(data => {
            receivedMessage.channel.send(data.compliment)
        })
        .catch(()=>{
            receivedMessage.channel.send("I'm feeling down atm ): ")
        })
    }
}