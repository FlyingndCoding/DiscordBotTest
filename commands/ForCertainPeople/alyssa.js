const fetch = require('node-fetch').default;
module.exports = {
    name: 'alyssa',
    description: 'this is a alyssa command',
    execute(client, receivedMessage,command, args, Discord){
        
        if(receivedMessage.author.id != '818625326040743936') return receivedMessage.channel.send('Lol this command is not for you.')
        
        
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