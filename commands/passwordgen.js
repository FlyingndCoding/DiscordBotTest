const fetch = require('node-fetch').default;
module.exports = {
    name: 'passwordgen',
    description: 'this is a password generating command',
    execute(client, receivedMessage,command, args, Discord){
       
        fetch(`https://www.passwordrandom.com/query?command=password`)
        .then(res => res.text())
        .then(data => {
            receivedMessage.channel.send(data)
        })
        .catch(()=>{
            receivedMessage.channel.send("No passwords for you today.")
        })
    }
}