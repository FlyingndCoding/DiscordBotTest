const animals = require('random-animals-api');
const fetch = require('node-fetch').default;
module.exports = {

    name: 'animals',
    aliases: ['cat', 'dog', 'bunny', 'duck', 'fox', 'lizard', 'shiba', 'koala', 'panda'],
    description: 'random cat image command',
    execute(client, receivedMessage, command, args, Discord) {
        if(command == 'animals') receivedMessage.channel.send("List of animals you can call:\nbird\ncat\ndog\nduck\nfox\nlizard\nshiba\nkoala\npanda\n\nNOTE: UI under dev.")
        if (command == 'cat') {
            animals.cat()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }
         
        
        if (command == 'dog') {
            animals.dog()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }
        if (command == 'bunny') {
            animals.bunny()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }
        if (command == 'duck') {
            animals.duck()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }
        if (command == 'fox') {
            animals.fox()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }
        if (command == 'lizard') {
            animals.lizard()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }
        if (command == 'shiba') {
            animals.shiba()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }
        if (command == 'koala') {
            animals.koala()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }
        if (command == 'panda') {
            animals.panda()
                .then(url => receivedMessage.channel.send(url))
                .catch((error) => console.error(error));
        }

    }
}
